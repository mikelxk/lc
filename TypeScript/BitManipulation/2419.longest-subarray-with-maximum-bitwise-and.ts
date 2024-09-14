function longestSubarray(nums: number[]): number {
  let res = 0,
    maxVal = 0,
    currStreak = 0
  for (let num of nums) {
    if (maxVal < num) {
      maxVal = num
      currStreak = 0
      res = 0
    }
    else if (maxVal == num) {
      ++currStreak
    } else {
      currStreak = 0
    }
    res = Math.max(res, currStreak)
  }
  return res
}
