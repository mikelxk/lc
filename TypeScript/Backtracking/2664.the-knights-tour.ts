function tourOfKnight(m: number, n: number, r: number, c: number): number[][] {
  let res = Array.from({ length: m }, () => new Array(n).fill(-1))
  backtrack(r, c, 0)
  return res
  function backtrack(x: number, y: number, steps: number) {
    if (x < 0 || x >= m || y < 0 || y >= n) {
      return false
    }
    //taken
    if (res[x][y] !== -1) {
      return false
    }
    res[x][y] = steps
    if (steps == m * n - 1) {
      return true
    }
    for (let [a, b] of [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ]) {
      if (backtrack(x + a, y + b, steps + 1)) {
        return true
      }
    }
    res[x][y] = -1
    return false
  }
}
