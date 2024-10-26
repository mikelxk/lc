function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = []
  function dfs(root: TreeNode | null, depth: number) {
    if (!root) {
      return
    }
    if (res.length == depth) {
      res.push([])
    }
    res[depth].push(root.val)
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
  }
  dfs(root, 0)
  return res
}

function levelOrderBFS(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }
  let queue: TreeNode[] = [root]
  let res: number[][] = []
  while (queue.length) {
    let cur = []
    let queueLen = queue.length
    for (let i = 0; i < queueLen; ++i) {
      let node = queue.shift()
      if (node) {
        cur.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    if (cur.length) {
      res.push(cur)
    }
  }
  return res
}
