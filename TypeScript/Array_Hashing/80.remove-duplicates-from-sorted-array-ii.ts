function removeDuplicates(nums: number[]): number {
  let i = 0
  for (let n of nums) {
    if (i < 2 || n > nums[i - 2]) {
      nums[i] = n
      ++i
    }
  }
  return i
}
