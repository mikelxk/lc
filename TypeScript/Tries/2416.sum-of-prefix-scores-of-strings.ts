class Trie {
  visited = 0
  ch = new Array<Trie>()
}
function sumPrefixScores(words: string[]): number[] {
  let trie = new Trie()
  let res: number[] = []
  let k = 0
  for (let x of words) {
    let t = trie
    for (let i = 0; i < x.length; ++i) {
      let c = x.charCodeAt(i) - "a".charCodeAt(0)
      if (!t.ch[c]) {
        t.ch[c] = new Trie()
      }
      t.ch[c].visited++
      t = t.ch[c]
    }
  }
  for (let x of words) {
    let t = trie
    let cur = 0
    for (let i = 0; i < x.length; ++i) {
      let c = x.charCodeAt(i) - "a".charCodeAt(0)
      cur += t.ch[c].visited
      t = t.ch[c]
    }
    res[k++] = cur
  }
  return res
}
sumPrefixScores(["abc", "ab", "bc", "b"])
