function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null
  }
  return helper(0, nums.length - 1)
  function helper(low: number, high: number) {
    if (low > high) {
        return null;
    }
    let mid = low + Math.floor((high-low) / 2)
    let node = new TreeNode(
      nums[mid],
      helper(low, mid - 1),
      helper(mid + 1, high)
    )
    return node
  }
}
sortedArrayToBST([-10,-3,0,5,9])