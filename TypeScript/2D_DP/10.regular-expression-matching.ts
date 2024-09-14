function isMatchRec(text: string, pattern: string): boolean {
  if (pattern.length == 0) {
    return !text.length
  }
  let firstMatch = text.length && (pattern[0] == text[0] || pattern[0] == ".")
  if (pattern.at(1) === "*") {
    let zeroMatched = isMatchRec(text, pattern.slice(2))
    let moreMatched = firstMatch && isMatchRec(text.slice(1), pattern)
    return zeroMatched || moreMatched
  } else {
    return firstMatch && isMatchRec(text.slice(1), pattern.slice(1))
  }
}
function isMatch(s: string, p: string): boolean {
  let m = s.length
  let n = p.length
  let cache: boolean[][] = [...Array(m + 1)].map(_ => Array(n + 1).fill(false))
  cache[m][n] = true
  for (let i = m; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      let firstMatch = i < m && (s[i] === p[j] || p[j] === ".")
      if (j + 1 < n && p[j + 1] === "*") {
        cache[i][j] = cache[i][j + 2]
        if (firstMatch) {
          cache[i][j] ||= cache[i + 1][j]
        }
      } else if (firstMatch) {
        cache[i][j] = cache[i + 1][j + 1]
      }
    }
  }
  return cache[0][0]
}
console.log(isMatch("ab", ".."))
