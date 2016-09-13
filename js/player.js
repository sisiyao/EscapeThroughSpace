// x = cx + r * cos(a)
// y = cy + r * sin(a)
// cx = x - r * cos(a)
// cy = y - r * sin(a)

import bindAll from 'lodash.bindall';

const PLAYER_CONSTANTS = {
  RADIUS: 55,
  HEAD_RADIUS: 12,
  COLOR: '#FF0000',
  // ORBIT_COLOR: '#cdcdcd'
};

class Player {
  constructor (center) {
    this.center = center;
    this.radius = PLAYER_CONSTANTS.RADIUS;
    this.headCenter = this.pointOnOrbit(0, center, PLAYER_CONSTANTS.RADIUS);
    this.headRadius = PLAYER_CONSTANTS.HEAD_RADIUS;
    this.tail = this.initialTail();
    this.color = PLAYER_CONSTANTS.COLOR;
    this.angle = 0;
    this.direction = 'counter-clockwise';

    bindAll(this, ['drawHead', 'drawTail', 'rotate',
    'switchAngles', 'calculateCenter', 'turnClockwise',
    'turnCounterClockwise']);
  }

  pointOnOrbit (angle, center, radius) {
    return [center[0] + radius * Math.cos(angle),
      center[1] + radius * Math.sin(angle)];
  }

  // drawOrbit (ctx) {
  //   ctx.fillStyle = PLAYER_CONSTANTS.ORBIT_COLOR;
  //   ctx.beginPath();
  //   ctx.arc(
  //     this.center[0], this.center[1], this.radius, 0, 2 * Math.PI, true
  //   );
  //   ctx.fill();
  // }

  drawHead (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.headCenter[0], this.headCenter[1], this.headRadius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }

  initialTail () {
    let tail = [];
    let angle = 2 * Math.PI;
    for (let i = 0; i <= 40 ; i++) {
      angle += (2 * Math.PI) / 90;
      let point = this.pointOnOrbit(angle, this.center, this.radius);
      tail.push(point);
    }
    return tail;
  }

  drawTail (ctx) {
    let radius = this.headRadius;
    for (let i = 7; i <= 40; i += 9) {
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
    if (this.direction === 'clockwise') {
      this.angle = this.angle === 2 * Math.PI ? (2 * Math.PI) / 100 :
        this.angle + (2 * Math.PI) / 80;
    } else {
      this.angle = this.angle === 0 ? (2 * Math.PI) - ((2 * Math.PI) / 100) :
        this.angle - (2 * Math.PI) / 80;
    }

    this.headCenter = this.pointOnOrbit(this.angle, this.center, this.radius);
    this.tail.pop();
    this.tail.unshift(this.headCenter);
  }

  switchAngles () {
    this.angle = (this.angle + Math.PI) % (2 * Math.PI);
  }

  calculateCenter () {
    this.center = [this.headCenter[0] - this.radius * Math.cos(this.angle),
      this.headCenter[1] - this.radius * Math.sin(this.angle)];
  }

  turnClockwise () {
    if (this.direction !== 'clockwise') {
      this.direction = 'clockwise';
      this.switchAngles();
      this.calculateCenter();
    }
  }

  turnCounterClockwise () {
    this.direction = 'counter-clockwise';
    this.switchAngles();
    this.calculateCenter();
  }
}

export default Player;
