import CheckForWin from "./CheckForWin.js";
export default class GameBoard {
  matrix: string[][];
  currentPlayerColor: string;
  winner: string | false;
  isDraw: boolean;
  gameOver: boolean | string;

  constructor() {
    // 7 columns x 6 rows
    this.matrix = [...new Array(6)].map(() => Array(7).fill(' '));
    this.currentPlayerColor = 'X';
    this.winner = false;
    this.isDraw = false;
    this.gameOver = false;
  }

  render(){
    let line = '\n' + '-'.repeat(37) + '\n';
    console.log(
      line + this.matrix.map(row =>
        row.map(column => ` | ${column} `).join('')
        + '|').join(line) + line
    );
  }

  makeMove(color: string, column: number) {
    if (this.gameOver) return false;
    if (color !== this.currentPlayerColor) return false;
    if (column < 0 || column >= this.matrix[0].length) return false;

    // Drop the piece in the selected column
    for (let row = this.matrix.length - 1; row >= 0; row--) {
      if (this.matrix[row][column] === ' ') {
        this.matrix[row][column] = color;

        // Check if there's a winner or if the game is a draw
        const checker = new CheckForWin(this.matrix);
        this.winner = checker.winCheck();
        this.isDraw = this.matrix.flat().every(cell => cell !== ' ');
        this.gameOver = this.winner || this.isDraw;
        this.currentPlayerColor = this.currentPlayerColor === 'X' ? 'O' : 'X';

        return true;
      }
    }

    return false; // Column is full
  }
}
