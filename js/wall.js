import bindAll from 'lodash.bindall';

const WALL_CONSTANTS = {
  color: '#cdcdcd'
};

class Wall {
  constructor (location) {
    this.location = location;
    this.color = WALL_CONSTANTS.color;
    this.x = location[0];
    this.y = location[1];
    this.width = location[2];
    this.height = location[3];

    bindAll(this, ['draw']);
  }

  draw (ctx, color) {
    ctx.rect(...this.location);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

export default Wall;
