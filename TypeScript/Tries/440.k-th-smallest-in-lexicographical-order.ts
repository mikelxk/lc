function findKthNumber(n: number, k: number): number {
  let cur = 1
  while (k > 1) {
    let gap = findGap(cur, cur + 1, n)
    if (gap <= k - 1) {
      k -= gap
      cur++
    } else {
      cur *= 10
      --k
    }
  }
  return cur
  function findGap(a: number, b: number, n: number) {
    let gr = 0
    while (a <= n) {
      gr += Math.min(n + 1, b) - a
      a *= 10
      b *= 10
    }
    return gr
  }
}
