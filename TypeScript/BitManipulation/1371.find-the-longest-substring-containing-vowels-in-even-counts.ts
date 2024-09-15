function findTheLongestSubstring(s: string): number {
  let prefixXor = 0
  let charMap = new Array<number>(26).fill(0)
  charMap[0] = 1
  charMap["e".charCodeAt(0) - "a".charCodeAt(0)] = 2
  charMap["i".charCodeAt(0) - "a".charCodeAt(0)] = 4
  charMap["o".charCodeAt(0) - "a".charCodeAt(0)] = 8
  charMap["u".charCodeAt(0) - "a".charCodeAt(0)] = 16
  let mp = new Array<number>(32).fill(-1)
  let res = 0
  for (let i = 0; i < s.length; ++i) {
    prefixXor ^= charMap[s[i].charCodeAt(0) - "a".charCodeAt(0)]
    if (mp[prefixXor] === -1 && prefixXor !== 0) {
      mp[prefixXor] = i
    }
    res = Math.max(res, i - mp[prefixXor])
  }
  return res
}
