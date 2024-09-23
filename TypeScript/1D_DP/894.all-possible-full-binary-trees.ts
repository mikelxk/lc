function allPossibleFBT(n: number): Array<TreeNode | null> {
  if (n == 1) {
    return [new TreeNode()]
  }
  if (n % 2 == 0) {
    return []
  }
  let res: Array<TreeNode | null> = []
  for (let i = 1; i < n; i += 2) {
    let left = allPossibleFBT(i)
    let right = allPossibleFBT(n - i - 1)
    for (let l of left) {
      for (let r of right) {
        let root = new TreeNode(0, l, r)
        res.push(root)
      }
    }
  }
  return res
}
