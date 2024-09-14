function countConsistentStrings(allowed: string, words: string[]): number {
  let res = 0
  for (let word of words) {
    for (let c of word) {
      if (!allowed.includes(c)) {
        res--
        break
      }
    }
    ++res
  }
  return res
}
console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]))