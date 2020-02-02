import Player from './Player';

export default class Map {
  column: number = 10;
  row: number = 10;
  players: Player[] = [];

  constructor(column: number, row: number, players?: Player[]) {
    this.column = column;
    this.row = row;
    if (players) { 
      this.players = players;
    }
  }

  generate(): any[][] {
    const fields = new Array(this.column);
    for(let y = 0; y < this.row; y++) {
      fields[y] = new Array(this.row).fill(0);
    }
    return fields;
  }
}
