function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number
): number {
  if (source === target) {
    return 0
  }
  let maxStop = Math.max(...routes.flat())
  let n = routes.length
  let minDistance = new Array(maxStop + 1).fill(n + 1)
  minDistance[source] = 0
  for (let i = 0; i < n; ++i) {
    for (let route of routes) {
      let min = n + 1
      for (let stop of route) {
        min = Math.min(min, minDistance[stop])
      }
      ++min
      for (let stop of route) {
        minDistance[stop] = Math.min(min, minDistance[stop])
      }
    }
  }
  return minDistance[target] < n + 1 ? minDistance[target] : -1
}
console.log(numBusesToDestination(
  [
    [1, 2, 7],
    [3, 6, 7],
  ],
  1,
  6
))
