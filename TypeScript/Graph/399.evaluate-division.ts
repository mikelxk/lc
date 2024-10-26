function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  let n = equations.length
  let map = new Map<string, number>() // Maps each variable to an index
  let idx = 0

  for (let i = 0; i < n; i++) {
    let [a, b] = equations[i]
    if (!map.has(a)) map.set(a, idx++)
    if (!map.has(b)) map.set(b, idx++)
  }

  let arrLen = map.size
  let mat = Array.from({ length: arrLen }, () => Array(arrLen).fill(-1))

  for (let i = 0; i < arrLen; i++) {
    mat[i][i] = 1
  }

  for (let i = 0; i < n; i++) {
    let [a, b] = equations[i]
    let x = map.get(a)!
    let y = map.get(b)!
    mat[x][y] = values[i]
    mat[y][x] = 1 / values[i]
  }

  for (let k = 0; k < arrLen; k++) {
    for (let i = 0; i < arrLen; i++) {
      for (let j = 0; j < arrLen; j++) {
        if (mat[i][k] > 0 && mat[k][j] > 0) {
          mat[i][j] =
            mat[i][j] === -1
              ? mat[i][k] * mat[k][j]
              : mat[i][j]
        }
      }
    }
  }

  let res = []
  for (let [c, d] of queries) {
    if (map.has(c) && map.has(d)) {
      let x = map.get(c)!
      let y = map.get(d)!
      res.push(mat[x][y] !== -1 ? mat[x][y] : -1)
    } else {
      res.push(-1)
    }
  }

  return res
}

