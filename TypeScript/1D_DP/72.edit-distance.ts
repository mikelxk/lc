let cache = new Map<string, number>()
function minDistance(word1: string, word2: string): number {
  let w1n = word1.length
  let w2n = word2.length
  if (!w1n && !w2n) {
    return 0
  }
  if (!w1n) {
    return w2n
  }
  if (!w2n) {
    return w1n
  }
  if (word1[0] === word2[0]) {
    return minDistance(word1.substring(1), word2.substring(1))
  }
  let cacheKey = `${word1}|${word2}`
  if (!cache.has(cacheKey)) {
    let insertMD = 1 + minDistance(word1, word2.substring(1))
    let deleteMD = 1 + minDistance(word1.substring(1), word2)
    let replaceMd = 1 + minDistance(word1.substring(1), word2.substring(1))
    cache.set(cacheKey, Math.min(insertMD, deleteMD, replaceMd))
  }
  return cache.get(cacheKey)
}
