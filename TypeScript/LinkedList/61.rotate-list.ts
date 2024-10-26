function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let n = 1
  if (!head) {
    return null
  }
  let tail: ListNode = null
  for (tail = head; tail.next; tail = tail.next, ++n);
  tail.next = head
  k = n - (k % n)
  for (let i = 0; i < k; ++i) {
    tail = tail.next
  }
  head = tail.next
  tail.next = null
  return head
}