var solution = function (isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    let high = n
    let low = 0
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2)
      if (isBadVersion(mid)) {
        high = mid
      }
      else{
        low = mid
      }
      return high
    }
  }
}
