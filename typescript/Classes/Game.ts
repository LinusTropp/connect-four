import prompt from "../helpers/prompt.js";
//import GameBoard from "./GameBoard.js";
import Player from "./Player.js";



export default class Game {
  //private board: GameBoard;
  player1!: Player;
  player2!: Player;
 
  constructor() {
    while (true) {
      this.createPlayers();
      //this.board = new GameBoard();
      //this.startGameLoop();
      //this.whoHasWonOnGameOver();
      console.log('');
      let playAgain = prompt('Vill ni spela igen? y/n: ');
      if (playAgain !== 'y'.toLowerCase()) {
        break;
      }
      
    }
    
  } 
  private createPlayers() {
    console.clear();
    console.log("Connect Four");

    const player1Name = prompt('Spelare 1 namn: ')
    const player2Name = prompt('Spelare 2 namn: ')

    this.player1 = new Player(player1Name, 'X');
    this.player2 = new Player(player2Name, 'O');
  }
}