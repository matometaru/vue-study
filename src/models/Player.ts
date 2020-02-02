import Position from './Position';

export default class Player {
  id: string = '';
  name: string = '';
  position: Position = new Position(0, 0);

  constructor(id: string, name: string, position?: Position) {
    this.id = id;
    this.name = name;
    if (position) { 
      this.position = position;
    }
  }

  move(direction: string): void {
    if (direction === '↑') {
      this.position.toUp();
    }
    if (direction === '↓') {
      this.position.toDown();
    }
    if (direction === '→') {
      this.position.toRight();
    }
    if (direction === '←') {
      this.position.toLeft();
    }
  }

  toString(): string {
    return `${this.id}: ${this.position.toString()}`;
  }
}
