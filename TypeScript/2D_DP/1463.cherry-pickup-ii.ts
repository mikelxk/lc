function cherryPickup(grid: number[][]): number {
  let m = grid.length
  let n = grid[0].length
  let cache = new Array(m).map(() => new Array(n).fill(null).map(() => new Array(n).fill(-1)))
  console.log(cache)
  return dp(0, 0, n - 1)
  function dp(row: number, col1: number, col2: number) {
    if (col1 < 0 || col1 >= n || col2 < 0 || col2 >= n) {
      return -1
    }
    if(cache[row][col1][col2]!==-1){
        return cache[row][col1][col2]
    }
    let res = grid[row][col1]
    if (col1 !== col2) {
      res += grid[row][col2]
    }
    if (row != m - 1) {
      let max = 0
      for (let i = col1 - 1; i <= col1 + 1; ++i) {
        for (let j = col2 - 1; j <= col2 + 1; ++j) {
          max = Math.max(max, dp(row + 1, i, j))
        }
      }
      res += max
    }
    cache[row][col1][col2] = res
    return res
  }
}
