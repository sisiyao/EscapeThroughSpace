import bindAll from 'lodash.bindall';

const SHIP_CONSTANTS = {
  CENTER: [150, 150],
  RADIUS: 55,
  HEAD_RADIUS: 12,
  COLOR: '#FF0000',
  ORBIT_COLOR: '#cdcdcd'
};

class Ship {
  constructor (ctx) {
    this.center = SHIP_CONSTANTS.CENTER;
    this.radius = SHIP_CONSTANTS.RADIUS;
    this.headCenter = this.pointOnOrbit(0, SHIP_CONSTANTS.CENTER, SHIP_CONSTANTS.RADIUS);
    this.headRadius = SHIP_CONSTANTS.HEAD_RADIUS;
    this.tail = this.initialTail();
    this.color = SHIP_CONSTANTS.COLOR;
    this.angle = 0;

    bindAll(this, ['drawOrbit', 'drawHead', 'drawTail', 'rotate']);
  }

  pointOnOrbit (angle, center, radius) {
    return [center[0] + radius * Math.cos(angle),
      center[1] + radius * Math.sin(angle)];
  }

  drawOrbit (ctx) {
    ctx.fillStyle = SHIP_CONSTANTS.ORBIT_COLOR;
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

  initialTail () {
    // interval = 2PI / 120
    // 60/9
    let tail = [];
    let angle = 2 * Math.PI;
    for (let i = 0; i <= 50 ; i++) {
      angle -= (2 * Math.PI) / 120;
      let point = this.pointOnOrbit(angle, this.center, this.radius);
      tail.push(point);
    }
    return tail;
  }

  drawTail (ctx) {
    let radius = this.headRadius;
    for (let i = 8; i <= 47; i += 7) {
      radius *= 0.7;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(
        this.tail[i][0], this.tail[i][1], radius, 0, 2 * Math.PI, true
      );
      ctx.fill();
    }
  }

  rotate () {
    this.angle = this.angle === 2 * Math.PI ? (2 * Math.PI) / 120 :
                this.angle + (2 * Math.PI) / 120;
    this.headCenter = this.pointOnOrbit(this.angle, this.center, this.radius);

    this.tail.pop();
    this.tail.unshift(this.headCenter);
  }

  move () {

  }

  bindKey () {
    // key("space", () => { this.move() });
  }

  // testing purposes
  start (ctx) {
    const animateCallback = () => {
      ctx.clearRect(0, 0, 1000, 600);
      this.drawOrbit(ctx);
      this.drawHead(ctx);
      this.drawTail(ctx);
      this.rotate();

      requestAnimationFrame(animateCallback);
    };

    animateCallback();
  }
}

export default Ship;
