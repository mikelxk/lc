function hasPath(
  maze: number[][],
  start: number[],
  destination: number[]
): boolean {
  let m = maze.length
  let n = maze[0].length
  let visited = new Set<string>()
  return dfs(start[0], start[1])
  function dfs(x: number, y: number) {
    let loc = `${x}|${y}`
    if (visited.has(loc)) {
      return false
    }
    visited.add(loc)
    if (x == destination[0] && y == destination[1]) {
      return true
    }
    for (let [i, j] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      let _x = x
      let _y = y
      while (
        _x + i >= 0 &&
        _x + i < m &&
        _y + j >= 0 &&
        _y + j < n &&
        maze[_x + i][_y + j] != 1
      ) {
        _x += i
        _y += j
      }
      if (dfs(_x, _y)) {
        return true
      }
    }
    return false
  }
}
hasPath(
  [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ],
  [0, 4],
  [3, 2]
)
