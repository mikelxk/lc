function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }
  let queue: [TreeNode, number][] = [[root, 0]]
  let table = new Map<number, number[]>()
  while (queue.length) {
    let queueLen = queue.length
    let [node, col] = queue.shift()
    if (node) {
      if (!table.has(col)) {
        table.set(col, [])
      }
      let vert = table.get(col)
      vert.push(node.val)
      queue.push([node.left, col - 1])
      queue.push([node.right, col + 1])
    }
  }
  let res = Array.from(table.entries())
    .sort(([col1, arr1], [col2, arr2]) => {
      return col1 - col2
    })
    .map(([col, arr]) => arr)
    return res
}
