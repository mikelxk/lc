function subsets(nums: number[]): number[][] {
  let res: number[][] = []
  let subset: number[] = []
  let n = nums.length
  dfs(0)
  return res
  function dfs(i: number) {
    if (i >= n) {
      res.push([...subset])
      return
    }
    subset.push(nums[i])
    dfs(i + 1)
    subset.pop()
    dfs(i + 1)
  }
}
function subsets1(nums: number[]): number[][] {
  let res = []
  backtrack(0, [])

  function backtrack(start: number, cur: number[]) {
    res.push([...cur])
    for (let i = start; i < nums.length; ++i) {
      backtrack(i + 1, [...cur, nums[i]])
    }
  }

  return res
}
console.log(subsets1([1, 2, 3]))
