function uncommonFromSentences(s1: string, s2: string): string[] {
  function buildCountMap(s: string) {
    let map = new Map<string, number>()
    for (let word of s.split(" ")) {
      map.set(word, (map.get(word) || 0) + 1)
    }
    return map
  }
  let c1 = buildCountMap(s1)
  let c2 = buildCountMap(s2)
  let res: string[] = []
  for (let [k, v] of c1.entries()) {
    if (v == 1) {
      if (!c2.has(k)) {
        res.push(k)
      }
    }
  }
  for (let [k, v] of c2.entries()) {
    if (v == 1) {
      if (!c1.has(k)) {
        res.push(k)
      }
    }
  }

  return res
}
