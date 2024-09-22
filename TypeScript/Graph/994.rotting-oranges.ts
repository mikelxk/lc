function orangesRotting(grid: number[][]): number {
  let m = grid.length
  let n = grid[0].length
  let freschCnt = 0
  let q: [number, number][] = []
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] == 2) {
        q.push([i, j])
      } else if (grid[i][j] == 1) {
        freschCnt++
      }
    }
  }
  if (freschCnt === 0) {
    return 0
  }
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  let res = -1
  while (q.length) {
    let size = q.length
    for (let i = 0; i < size; ++i) {
      let [r, c] = q.shift()
      for (let [dr, dc] of dirs) {
        let x = r + dr
        let y = c + dc
        if (x < 0 || x == m || y < 0 || y == n || grid[x][y] != 1) {
          continue
        }
        //mark as rotten
        grid[x][y] = 2
        q.push([x, y])
        freschCnt--
      }
    }
    ++res
  }
  return freschCnt == 0 ? res : -1
}
orangesRotting([[1,2]])
