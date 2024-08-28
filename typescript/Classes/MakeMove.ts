import Player from "./Player.js";
export default class MakeMove {
  
  player: Player;
  column: number;


  constructor(player: Player, column: number) {
    this.player = player;
    this.column = column;
  
  }
  
}