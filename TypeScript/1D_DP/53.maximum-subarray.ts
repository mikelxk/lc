function maxSubArray(nums: number[]): number {
  let n = nums.length
  let dp = new Array(n).fill(0)
  dp[0] = nums[0]
  let max = dp[0]

  for (let i = 1; i < n; ++i) {
    if (dp[i - 1] > 0) {
      dp[i] = nums[i] + dp[i - 1]
    } else {
      dp[i] = nums[i]
    }
    max = Math.max(max, dp[i])
  }
  return max
}

