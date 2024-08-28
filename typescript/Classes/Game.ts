import prompt from "../helpers/prompt.js";
import GameBoard from "./GameBoard.js";
import Player from "./Player.js";

export default class Game {
  private board: GameBoard;
  private player1!: Player;
  private player2!: Player;

  constructor() {
    while (true) {
      this.createPlayers();
      this.board = new GameBoard();
      this.startGameLoop();
      this.whoHasWonOnGameOver();
      console.log('');
      let playAgain = prompt('Vill ni spela igen? y/n: ');
      if (playAgain.toLowerCase() !== 'y') {
        break;
      }
    }
  }

  private createPlayers() {
    console.clear();
    console.log("Connect Four");

    const player1Name = prompt('Spelare 1 namn: ');
    const player2Name = prompt('Spelare 2 namn: ');

    this.player1 = new Player(player1Name, 'X');
    this.player2 = new Player(player2Name, 'O');
  }

  private startGameLoop() {
    while (!this.board.gameOver) {
      console.clear();
      this.board.render();
      let player = this.board.currentPlayerColor === 'X' ? this.player1 : this.player2;
      let move = prompt(
        `Ange ditt drag ${player.color} ${player.name} - skriv in kolumn (1-7): `
      );
      let column = +move.trim() - 1;
      this.board.makeMove(player.color, column);
    }
  }

  private whoHasWonOnGameOver() {
    console.clear();
    this.board.render();
    if (this.board.winner) {
      let winningPlayer = this.board.winner === 'X' ? this.player1 : this.player2;
      console.log(`Grattis ${winningPlayer.color}: ${winningPlayer.name}, du vann!`);
    } else {
      console.log('Tyvärr det blev oavgjort...');
    }
  }
}
