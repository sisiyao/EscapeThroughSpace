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
    this.width = width;
    this.height = height;
    this.wrapper = wrapper;

    bindAll(this, ['drawWalls', 'borderCollision', 'wallCollision',
      'drawEndGoal', 'playerWon']);
  }

  drawWalls () {
    this.walls.forEach(wall => {
      wall.draw(this.ctx, '#cdcdcd');
    });
  }

  drawEndGoal () {
    this.endGoal.draw(this.ctx, '#7fbf7f');
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
}

export default Maze;
