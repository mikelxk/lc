function matrixScore(grid: number[][]): number {
  let m = grid.length
  for (let i = 0; i < m; ++i) {
    if (grid[i][0] != 1) {
      for (let j = 0; j < grid[i].length; ++j) {
        grid[i][j] ^= 1
      }
    }
  }
  for (let j = 1; j < grid[0].length; ++j) {
    let oneCnt = 0
    for (let i = 0; i < m; ++i) {
      if (grid[i][j] == 1) {
        oneCnt += 1
      }
    }
    if (oneCnt < m / 2) {
      //flip
      for (let i = 0; i < m; ++i) {
        grid[i][j] ^= 1
      }
    }
  }
  let res = 0
  for (let row of grid) {
    res += parseInt(row.join(""), 2)
  }
  return res
}
matrixScore([
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
])
