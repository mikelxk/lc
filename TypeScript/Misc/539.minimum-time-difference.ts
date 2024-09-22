function findMinDifference(timePoints: string[]): number {
  function getMinutes(t: string) {
    let [h1, m1] = t.split(":")
    let t1 = Number(h1) * 60 + Number(m1)
    return t1
  }
  let minutes = timePoints.map(getMinutes).sort((a, b) => a - b)
  let res = minutes[0] + 24 * 60 - minutes.at(-1)
  for (let i = 1; i < minutes.length; ++i) {
    res = Math.min(res, minutes[i] - minutes[i - 1])
  }
  return res
}
findMinDifference(["23:59", "00:00"])
