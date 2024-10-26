function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function same(n1: TreeNode | null, n2: TreeNode | null) {
    if (!n1 && !n2) {
      return true
    }
    if (!n1 || !n2) {
      return false
    }
    return (
      same(n1.left, n2.left) && same(n1.right, n2.right) && n1.val == n2.val
    )
  }
  function dfs (node: TreeNode | null) {
    if (!node) return false
    if (same(node, subRoot)) return true
    return dfs(node.left) || dfs(node.right)
  }
  return dfs(root)
}
