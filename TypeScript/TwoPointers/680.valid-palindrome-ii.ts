function validPalindrome(s: string): boolean {
  let n = s.length
  function shrink(a: number, b: number) {
    while (a < b) {
      if (s[a] != s[b]) {
        return false
      }
      ++a
      --b
    }
    return true
  }
  for (let i = 0, j = n - 1; i < j; ++i, --j) {
    if (s[i] != s[j]) {
      return shrink(i + 1, j) || shrink(i, j - 1)
    }
  }
  return true
}
