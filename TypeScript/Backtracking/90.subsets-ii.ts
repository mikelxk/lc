function subsetsWithDup(nums: number[]): number[][] {
  let res = []
  nums.sort((a, b) => a - b)
  backtrack(0, [])

  function backtrack(start: number, cur: number[]) {
    res.push([...cur])
    for (let i = start; i < nums.length; ++i) {
      if (i > start && nums[i] === nums[i - 1]) continue
      backtrack(i + 1, [...cur, nums[i]])
    }
  }

  return res
}
