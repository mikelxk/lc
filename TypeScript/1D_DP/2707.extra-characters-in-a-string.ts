function minExtraChar(s: string, dictionary: string[]): number {
  const dp: number[] = new Array(s.length + 1).fill(-1)
  function minExtraHelper(i: number) {
    if (i === 0) {
      return 0
    }
    if (dp[i] !== -1) {
      return dp[i]
    }
    dp[i] = 1 + minExtraHelper(i - 1)
    for (const w of dictionary) {
      const n = w.length
      if (i >= n && s.slice(i - n, i) === w) {
        dp[i] = Math.min(dp[i], minExtraHelper(i - n))
      }
    }
    return dp[i]
  }
  return minExtraHelper(s.length)
}
