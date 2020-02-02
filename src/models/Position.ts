import Field from './Field';

export default class Position {
  x: number = 0;
  y: number = 0;

  static TOP_LEFT = [0, 0];
  static TOP_RIGHT = [Field.COLUMN_NUM, 0];
  static BOTTOM_RIGHT = [Field.COLUMN_NUM, Field.ROW_NUM];
  static BOTTOM_LEFT = [0, Field.ROW_NUM];

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
    if (this.x >= 12) {
      return;
    }
    this.x++;
  }

  toDown() {
    if (this.y >= 12) {
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
    const WALL_SIZE = 50;
    return this.x * 50 + WALL_SIZE;
  }

  positionY(): number {
    const WALL_SIZE = 50;
    return this.y * 50 + WALL_SIZE;
  }

  toString(): string {
    return `[${this.x}, ${this.y}]`;
  }
}
