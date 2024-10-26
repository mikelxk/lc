function checkInclusion(s1: string, s2: string): boolean {
  let m = s1.length
  let n = s2.length
  let s1arr = new Array<number>(26).fill(0)
  let s2arr = new Array<number>(26).fill(0)
  for (let i = 0; i < m; ++i) {
    s1arr[s1.charCodeAt(i) - 97] += 1
    s2arr[s2.charCodeAt(i) - 97] += 1
  }
  for (let i = 0; i < n - m; ++i) {
    if (match()) {
      return true
    }
    s2arr[s2.charCodeAt(i + m) - 97] += 1
    s2arr[s2.charCodeAt(i) - 97] -= 1
  }
  return match()
  function match() {
    for (let i = 0; i < 26; ++i) {
      if (s1arr[i] !== s2arr[i]) {
        return false
      }
    }
    return true
  }
}
