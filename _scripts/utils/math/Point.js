export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(point) {
    this.x += point.x;
    this.y += point.y;
  }

  subtract(point) {
    this.x -= point.x;
    this.y -= point.y;
  }

  distance(point) {
    const x = this.x - point.x;
    const y = this.y - point.y;

    return Math.sqrt(x * x + y * y);
  }

  clone() {
    return new Point(this.x, this.y);
  }
};
