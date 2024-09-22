function lexicalOrder(n: number): number[] {
  let res: number[] = []
  dfs(1)
  return res
  function dfs(cur: number) {
    if (cur > n) {
      return
    }
    res.push(cur)
    dfs(cur * 10)
    if (cur % 10 != 9) {
      dfs(cur + 1)
    }
  }
}
