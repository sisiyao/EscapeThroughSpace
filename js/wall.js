import bindAll from 'lodash.bindall';

class Wall {
  constructor (location) {
    this.location = location;
    this.x = location[0];
    this.y = location[1];
    this.width = location[2];
    this.height = location[3];

    bindAll(this, ['draw']);
  }

  draw (ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(...this.location);
  }
}

export default Wall;
