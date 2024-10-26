function maxGoodNumber(nums: number[]): number {
  let binNums = nums.map(num => num.toString(2))
  let res = 0
  backtrack([], new Set())
  return res
  function backtrack(curr: string[], usedIndices: Set<number>) {
    if (curr.length == 3) {
      res = Math.max(res, parseInt(curr.join(""), 2))
      return
    }

    for (let i = 0; i < binNums.length; i++) {
      if (!usedIndices.has(i)) {
        usedIndices.add(i)
        backtrack([...curr, binNums[i]], new Set(usedIndices))
        usedIndices.delete(i)
      }
    }
  }
}
console.log(maxGoodNumber([1, 38, 1]))
