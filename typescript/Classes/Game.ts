import prompt from "../helpers/prompt.js";
import GameBoard from "./GameBoard.js";
import Player from "./Player.js";
import ComputerPlayer from "./ComputerPlayer.js";

export default class Game {
  board: GameBoard;
  player1!: Player;
  player2!: Player;
  isComputer: boolean = false;

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

  createPlayers() {
    console.clear();
    console.log("Connect Four");

    const player1Name = prompt('Spelare 1 namn: ');
    const isComputer = prompt('Är spelare 2 en dator? y/n: ').toLowerCase() === 'y';

    this.player1 = new Player(player1Name, 'X');
    if (isComputer) {
      this.player2 = new ComputerPlayer('O');
      this.isComputer = true;
    } else {
      const player2Name = prompt('Spelare 2 namn: ');
      this.player2 = new Player(player2Name, 'O');
      this.isComputer = false;
    }
  }

    startGameLoop() {
    while (!this.board.gameOver) {
      console.clear();
      this.board.render();
      let player = this.board.currentPlayerColor === 'X' ? this.player1 : this.player2;

      if (this.isComputer && player instanceof ComputerPlayer) {
        let column = player.makeMove(this.board);
        this.board.makeMove(player.color, column);
      } else {
        let move = prompt(
          `Ange ditt drag ${player.color} ${player.name} - skriv in kolumn (1-7): `
        );
        let column = +move.trim() - 1;
        this.board.makeMove(player.color, column);
      }
    }
  }

  whoHasWonOnGameOver() {
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
