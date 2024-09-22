function updateMatrix(mat: number[][]): number[][] {
  let m = mat.length
  let n = mat[0].length
  let res: number[][] = Array.from(Array(m), () => new Array(n).fill(-1))
  let q: [number, number][] = []
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (mat[i][j] === 0) {
        res[i][j] = 0
        q.push([i, j])
      }
    }
  }
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  while (q.length) {
    let [r, c] = q.shift()
    for (let [dr, dc] of dirs) {
      let nr = r + dr
      let nc = c + dc
      if (nr < 0 || nr == m || nc < 0 || nc == n || res[nr][nc] !== -1) {
        continue
      }
      res[nr][nc] = res[r][c] + 1
      q.push([nr, nc])
    }
  }
  return res
}
updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
])
