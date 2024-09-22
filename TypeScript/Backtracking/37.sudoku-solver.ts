function solveSudoku(board: string[][]) {
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] == ".") {
        for (let k = 1; k <= 9; ++k) {
          let kc = k.toString()
          if (isValid(i, j, kc)) {
            board[i][j] = kc
            if (solveSudoku(board)) return true
            else board[i][j] = "."
          }
        }
        return false
      }
    }
  }
  return true
  function isValid(r: number, c: number, val: string): boolean {
    for (let i = 0; i < 9; ++i) {
      // Check row
      if (board[r][i] === val) {
        return false
      }
      // Check column
      if (board[i][c] === val) {
        return false
      }
    }

    // Check 3x3 subgrid
    const startRow = r - (r % 3)
    const startCol = c - (c % 3)
    for (let x = 0; x < 3; ++x) {
      for (let y = 0; y < 3; ++y) {
        if (board[startRow + x][startCol + y] === val) {
          return false
        }
      }
    }

    return true
  }
}
let b = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
solveSudoku(b)
console.log(b)
