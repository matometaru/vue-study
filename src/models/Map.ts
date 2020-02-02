import Player from './Player';

export default class Map {
  column: number = 13;
  row: number = 13;
  players: Player[] = [];

  constructor(column: number, row: number, players?: Player[]) {
    this.column = column;
    this.row = row;
    if (players) { 
      this.players = players;
    }
  }

  generate(): number[][] {
    let fields = new Array(this.column);
    for(let y = 0; y < this.row; y++) {
      fields[y] = new Array(this.row).fill(0);
    }
    fields = this.generateWall(fields);
    return fields;
  }

  private generateWall(fields: number[][]): number[][] {
    const wall = new Array(this.row).fill(1);
    fields.unshift(wall);
    fields.push(wall);
    for(let y = 0; y < fields.length; y++) {
      fields[y].unshift(1);
      fields[y].push(1);
    }
    return fields;
  }
}
