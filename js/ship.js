const SHIP_CONSTANTS = {
  CENTER: [100, 100],
  RADIUS: 30,
  HEAD_RADIUS: 8,
  COLOR: '#FF0000',
  TEST_COLOR: '#cdcdcd'
};

class Ship {
  constructor (ctx) {
    this.center = SHIP_CONSTANTS.CENTER;
    this.radius = SHIP_CONSTANTS.RADIUS;
    this.headCenter = [SHIP_CONSTANTS.CENTER[0] + SHIP_CONSTANTS.RADIUS * Math.cos(0),
              SHIP_CONSTANTS.CENTER[1] + SHIP_CONSTANTS.RADIUS * Math.sin(0)];
    this.headRadius = SHIP_CONSTANTS.HEAD_RADIUS;
    this.tail = [];
    this.color = SHIP_CONSTANTS.COLOR;
    this.angle = 0;
  }

  drawOrbit (ctx) {
    ctx.fillStyle = SHIP_CONSTANTS.TEST_COLOR;
    ctx.beginPath();
    ctx.arc(
      this.center[0], this.center[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }

  drawHead (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.headCenter[0], this.headCenter[1], this.headRadius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }

  rotate () {
    this.angle = this.angle === 2 * Math.PI ? 0 :
                this.angle += (2 * Math.PI) / 120;
    this.headCenter = [this.center[0] + this.radius * Math.cos(this.angle),
                this.center[1] + this.radius * Math.sin(this.angle)];
  }

  move () {

  }
}

export default Ship;
