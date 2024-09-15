function combine(n: number, k: number): number[][] {
  let res: number[][] = []
  function backtrack(curr: number[], start: number) {
    if (curr.length == k) {
      res.push([...curr])
      return
    }
    for (let i = start; i <= n; ++i) {
      backtrack([...curr, i], i + 1)
    }
  }
  backtrack([], 1)
  return res
}
