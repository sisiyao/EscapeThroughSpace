import Player from './player';
import Wall from './wall';
import LEVELS from './levels';
import bindAll from 'lodash.bindall';

class Maze {
  constructor (level, ctx, width, height, wrapper) {
    this.player = new Player(LEVELS[level].playerStart);
    this.ctx = ctx;
    this.walls = LEVELS[level].walls.map(wall => new Wall(wall));
    this.endGoal = new Wall(LEVELS[level].endGoal);
    this.finishText = LEVELS[level].finishText;
    this.width = width;
    this.height = height;
    this.wrapper = wrapper;

    bindAll(this, ['drawWalls', 'borderCollision', 'wallCollision',
      'drawEndGoal', 'playerWon', 'writeFinish', 'drawMaze', 'step']);
  }

  bindKeys () {
    Mousetrap.bind("space", this.player.turnClockwise, 'keydown');
    Mousetrap.bind("space", this.player.turnCounterClockwise, 'keyup');
  }

  drawWalls () {
    this.walls.forEach(wall => {
      wall.draw(this.ctx, '#cdcdcd');
    });
  }

  drawEndGoal () {
    this.endGoal.draw(this.ctx, '#329932');
  }

  borderCollision () {
    if (this.player.headCenter[0] <
        this.player.headRadius - .3 * this.player.headRadius ||
      this.player.headCenter[0] >
        this.width - this.player.headRadius + .3 * this.player.headRadius ||
      this.player.headCenter[1] <
        this.player.headRadius - .3 * this.player.headRadius ||
      this.player.headCenter[1] >
        this.height - this.player.headRadius + .3 * this.player.headRadius) {
      return true;
    }
  }

  wallCollision () {
    return this.walls.some(wall => {
      return (this.player.headCenter[0] >
        wall.x - .7 * this.player.headRadius &&
      this.player.headCenter[0] <
        wall.x + wall.width + .7 * this.player.headRadius &&
      this.player.headCenter[1] >
        wall.y - .7 * this.player.headRadius &&
      this.player.headCenter[1] <
        wall.y + wall.height + .7 * this.player.headRadius);
    });
  }

  playerWon () {
    return (this.player.headCenter[0] >
      this.endGoal.x + this.player.headRadius &&
    this.player.headCenter[0] <
      this.endGoal.x + this.endGoal.width - this.player.headRadius &&
    this.player.headCenter[1] >
      this.endGoal.y + this.player.headRadius &&
    this.player.headCenter[1] <
      this.endGoal.y + this.endGoal.height - this.player.headRadius);
  }

  writeFinish () {
    this.ctx.font="24px Verdana";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText("F I N I S H", ...this.finishText);
  }

  drawMaze () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawEndGoal();
    this.writeFinish();
    this.drawWalls();

    if (this.player.center[0] !== this.player.playerStart[0] &&
      this.player.center[1] !== this.player.playerStart[1]) {
        this.moveMaze(...this.player.headCenter);
    }

    this.player.rotate();
    this.player.drawHead(this.ctx);
    this.player.drawTail(this.ctx);
  }

  moveMaze (x, y) {
    this.wrapper.scrollLeft = x - this.player.playerStart[0];
    this.wrapper.scrollTop = y - this.player.playerStart[1];
  }

  step () {
    this.drawMaze();
    if (this.borderCollision() || this.wallCollision()) {
      console.log('collision');
    } else if (this.playerWon()) {
      console.log('win');
    } else {
      requestAnimationFrame(this.step);
    }
  }

  start () {
    this.bindKeys();
    this.step();
  }
}

export default Maze;
