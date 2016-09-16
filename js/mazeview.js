import Maze from './maze';
import bindAll from 'lodash.bindall';
import LEVELS from './levels';

class MazeView {
  constructor (maze, ctx, level, nextLevelCallback, resolveGameCallback) {
    this.maze = maze;
    this.level = level;
    this.ctx = ctx;
    this.player = maze.player;
    this.finishText = LEVELS[level].finishText;
    this.nextLevel = nextLevelCallback;
    this.resolveGame = resolveGameCallback;

    bindAll(this, ['drawMaze', 'step']);
  }

  bindKeys () {
    Mousetrap.bind("space", this.player.turnClockwise, 'keydown');
    Mousetrap.bind("space", this.player.turnCounterClockwise, 'keyup');
  }

  drawMaze () {
    this.ctx.clearRect(0, 0, this.maze.width, this.maze.height);
    this.maze.drawEndGoal();
    this.writeFinish();
    this.maze.drawWalls();

    if (this.player.center[0] !== this.player.playerStart[0] &&
      this.player.center[1] !== this.player.playerStart[1]) {
        this.moveMaze(...this.player.headCenter);
    }

    this.player.rotate();
    this.player.drawHead(this.ctx);
    this.player.drawTail(this.ctx);
  }

  moveMaze (x, y) {
    this.maze.wrapper.scrollLeft = x - this.player.playerStart[0];
    this.maze.wrapper.scrollTop = y - this.player.playerStart[1];
  }

  writeFinish () {
    this.ctx.font="24px Poppins";
    // this.ctx.fillStyle = "#ffffff";
    this.ctx.fillStyle = "black";

    this.ctx.fillText("F I N I S H", ...this.finishText);
  }

  resetWindow () {
    this.maze.wrapper.scrollLeft = 0;
    this.maze.wrapper.scrollTop = 0;
  }

  freezeGame (callback) {
    window.setTimeout(() => {
      callback();
      this.resetWindow();
    }, 400);
  }

  step () {
    this.drawMaze();
    if (this.maze.borderCollision() || this.maze.wallCollision()) {
      this.freezeGame(this.resolveGame.bind(null, 'lose'));
    } else if (this.maze.playerWon()) {
      if (this.level === Math.max.apply(Math, Object.keys(LEVELS))) {
      this.freezeGame(this.resolveGame.bind(null, 'win'));
      } else {
        this.freezeGame(this.nextLevel);
      }
    } else {
      requestAnimationFrame(this.step);
    }
  }

  start () {
    this.step();
  }
}

export default MazeView;
