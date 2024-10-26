function minEatingSpeed(piles: number[], h: number): number {
  let sum = piles.reduce((a, b) => a + b)
  let minH = Math.floor(sum / h)
  let res = minH
  for (; ; ++res) {
    let limit = 0
    for (let p of piles) {
      limit += Math.ceil(p / res)
    }
    if (limit <= h) {
      return res
    }
  }
}
console.log(minEatingSpeed([3, 6, 7, 11], 8))
