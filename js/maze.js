import Player from './player';
import Wall from './wall';
import LEVELS from './levels';
import bindAll from 'lodash.bindall';

class Maze {
  constructor (level, ctx, width, height) {
    this.player = new Player(LEVELS[level].playerStart);
    this.ctx = ctx;
    this.walls = LEVELS[level].walls.map(wall => new Wall(wall));
    this.endGoal = new Wall(LEVELS[level].endGoal);
    this.width = width;
    this.height = height;

    bindAll(this, ['drawWalls', 'borderCollision', 'wallCollision']);
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
    this.endGoal.draw(this.ctx, '#cdcdcd');
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

  start () {
    this.bindKeys();
    const animateCallback = () => {
      this.ctx.clearRect(0, 0, 1000, 600);
      this.drawWalls();
      this.player.drawHead(this.ctx);
      this.player.drawTail(this.ctx);
      this.player.rotate();

      if (this.borderCollision() || this.wallCollision()) {
        console.log('collision');
      } else {
        requestAnimationFrame(animateCallback);
      }
    };

    animateCallback();
  }
}

export default Maze;
