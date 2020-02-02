export default class Position {
  x: number = 0;
  y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toUp() {
    if (this.y <= 0) {
      return;
    }
    this.y--;
  }

  toRight() {
    if (this.x >= 10) {
      return;
    }
    this.x++;
  }

  toDown() {
    if (this.y >= 10) {
      return;
    }
    this.y++;
  }

  toLeft() {
    if (this.x <= 0) {
      return;
    }
    this.x--;
  }

  positionX(): number {
    return this.x * 30;
  }

  positionY(): number {
    return this.y * 30;
  }

  toString(): string {
    return `[${this.x}, ${this.y}]`;
  }
}
