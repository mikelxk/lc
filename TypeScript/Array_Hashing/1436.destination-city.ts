function destCity(paths: string[][]): string {
  let m = new Map<string, number>()
  for (let [src, dst] of paths) {
    if (!m.has(src)) {
      m.set(src, 0)
    }
    if (!m.has(dst)) {
      m.set(dst, 0)
    }
    let outGoing = m.get(src)
    m.set(src, outGoing + 1)
  }
  for (let [city, cnt] of m.entries()) {
    if (cnt == 0) {
      return city
    }
  }
}
