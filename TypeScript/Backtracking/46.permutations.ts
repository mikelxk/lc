function permute(nums: number[]): number[][] {
  let n = nums.length
  let res: number[][] = []
  backtrack(0)
  return res
  function backtrack(first: number) {
    if (first == n) {
      res.push([...nums])
    }
    for (let i = first; i < n; ++i) {
      ;[nums[first], nums[i]] = [nums[i], nums[first]]
      backtrack(first + 1)
      ;[nums[first], nums[i]] = [nums[i], nums[first]]
    }
  }
}
function per(nums: number[]): number[][] {
  let res: number[][] = []
  let n = nums.length
  if (n === 1) {
    return [[nums[0]]]
  }
  for (let i = 0; i < n; ++i) {
    let n = nums[i]
    let remaining = nums.filter(x => x != n)
    let perms = per(remaining)
    for (let p of perms) {
      res.push([...p, n])
    }
  }
  return res
}
console.log(per([0, 1]))
