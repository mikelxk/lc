function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  let jobs = endTime
    .map((e, i) => [startTime[i], e, profit[i]])
    .toSorted((a, b) => a[1] - b[1])
  let dp = [[0, 0]]
  for (let [s, e, p] of jobs) {
    let i = dp.findIndex([])
  }
}
