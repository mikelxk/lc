function countAndSay(n: number): string {
  let rle = "1"
  for (let i = 1; i < n; ++i) {
    rle = RLE(rle)
  }
  return rle
  function RLE(s: string) {
    let currChar = s[0]
    let occur = 1
    let res: (string | number)[] = [1, currChar]
    for (let i = 1; i < s.length; ++i) {
      if (s[i] == currChar) {
        ++occur
        res[res.length - 2] = occur
      } else {
        currChar = s[i]
        occur = 1
        res.push(occur)
        res.push(s[i])
      }
    }
    return res.join("")
  }
}
countAndSay(4)
