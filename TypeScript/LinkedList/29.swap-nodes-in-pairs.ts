function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }
  let node = head.next
  head.next = swapPairs(head.next.next)
  node.next = head
  return node
}
