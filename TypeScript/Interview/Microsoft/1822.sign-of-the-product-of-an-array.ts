function arraySign(nums: number[]): number {
  let res = 1
  for (let n of nums) {
    if (n < 0) {
      res *= -1
    }
    if (n == 0) {
      return 0
    }
  }
  return res
}
