function partition(s: string): string[][] {
  function isPali(str: string) {
    return str == str.split("").reverse().join("")
  }
  let res: string[][] = []
  let n = s.length
  function backtrack(start: number, curr: string[]) {
    if (start >= n) {
      res.push([...curr])
      return
    }
    for (let end = start; end < n; ++end) {
      let sub = s.substring(start, end + 1)
      if (isPali(sub)) {
        backtrack(end + 1, [...curr, sub])
      }
    }
  }
  backtrack(0, [])
  return res
}
console.log(partition("aab"))
