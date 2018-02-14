export default class Rectangle {
  constructor(coords, size) {
    this.x = coords.x;
    this.y = coords.y;

    this.width  = size.x;
    this.height = size.y;
  }

  collides(rect) {
    return rect.x < this.x + this.width
        && rect.y < this.y + this.height
        && rect.x + rect.width  > this.x
        && rect.y + rect.height > this.y;
  }
}
