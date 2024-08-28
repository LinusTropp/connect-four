
export default class CheckForWin {
  private matrix: string[][];

  constructor(matrix: string[][]) {
    this.matrix = matrix;
  }

  winCheck(): string | false {
    let m = this.matrix;

    
    const directions = [
      [0, 1],  // horizontal
      [1, 0],  // vertical
      [1, 1],  // diagonal down-right
      [1, -1]  // diagonal down-left
    ];

    // Loop through each cell
    // r = row, c = column
    for (let r = 0; r < m.length; r++) {
      for (let c = 0; c < m[0].length; c++) {
        const color = m[r][c];
        if (color !== ' ') {
          for (let [dr, dc] of directions) {
            if (this.checkDirection(r, c, dr, dc, color)) {
              return color;
            }
          }
        }
      }
    }
    return false;
  }

  checkDirection(r: number, c: number, dr: number, dc: number, color: string): boolean {
    for (let i = 0; i < 4; i++) {
      const nr = r + dr * i;
      const nc = c + dc * i;
      if (nr < 0 || nr >= this.matrix.length || nc < 0 || nc >= this.matrix[0].length || this.matrix[nr][nc] !== color) {
        return false;
      }
    }
    return true;
  }
}
