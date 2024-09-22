function minCostClimbingStairs(cost: number[]): number {
  let n = cost.length - 3
  for (let i = n; i >= 0; --i) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2])
  }
  return Math.min(cost[0], cost[1])
}
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
