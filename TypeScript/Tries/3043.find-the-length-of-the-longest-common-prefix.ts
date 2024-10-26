function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let map = new Map<number, number>()
  for (let x of arr1) {
    while (x) {
      map.set(x, x.toString.length)
      x /= 10
    }
  }
  let res = 0
  for (let y of arr2) {
    while (y) {
      if (map.has(y)) {
        res = Math.max(res, map.get(y))
      }
      y /= 10
    }
  }
  return res
}
