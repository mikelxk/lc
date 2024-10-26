function arrayRankTransform(arr: number[]): number[] {
  let res = [...arr].sort((a, b) => a - b)
  let rank = new Map<number, number>()
  for (let n of res) {
    if (!rank.has(n)) {
      rank.set(n, rank.size + 1)
    }
  }
  for (let i = 0; i < arr.length; ++i) {
    res[i] = rank.get(arr[i])
  }

  return res
}
arrayRankTransform([100, 100, 100])
