export default class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  collides(rect) {
    return rect.x < this.x + this.width
        && rect.y < this.y + this.height
        && rect.x + rect.width  > this.x
        && rect.y + rect.height > this.y;
  }
}
