function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  if (obstacleGrid[0][0] == 1) {
    return 0
  }
  let dp:number[][] = [...Array(m)].map(_ => Array(n).fill(0))
  dp[0][0] = 1
  for (let i = 1; i < m; ++i) {
    if (!obstacleGrid[i][0]) {
      dp[i][0] = dp[i - 1][0]
    }
  }
  for (let j = 1; j < n; ++j) {
    if (!obstacleGrid[0][j]) {
      dp[0][j] = dp[0][j - 1]
    }
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (!obstacleGrid[i][j]) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  console.log(dp)
  return dp.at(-1).at(-1)
}
uniquePathsWithObstacles([[0, 0]])
