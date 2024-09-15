function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  let startColor = image[sr][sc]
  function dfs(i: number, j: number) {
    if (
      i < 0 ||
      i >= image.length ||
      j < 0 ||
      j >= image[0].length ||
      image[i][j] === color ||
      image[i][j] !== startColor
    ) {
      return
    }
    image[i][j] = color
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  dfs(sr, sc)
  return image
}
floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
)
