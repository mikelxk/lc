declare interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null)
}
declare interface ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null)
}

declare class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  next: _Node | null
  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node)
}
