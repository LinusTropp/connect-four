import Player from "./Player.js";
import GameBoard from "./GameBoard.js";

export default class ComputerPlayer extends Player {
  constructor(color: string) {
    super("Computer", color);
  }

  makeMove(board: GameBoard): number {
    const availableColumns = board.matrix[0].map((_, col) => col).filter(col => board.matrix[0][col] === ' ');
    const randomIndex = Math.floor(Math.random() * availableColumns.length);
    return availableColumns[randomIndex];
  }
}