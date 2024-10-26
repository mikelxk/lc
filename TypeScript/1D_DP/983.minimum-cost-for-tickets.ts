function mincostTickets(
  days: number[],
  [oneD, sevenD, thrityD]: [number, number, number]
): number {
  let required = new Set(days)
  let lastDay = days.at(-1)
  let dp = new Array(lastDay + 1).fill(-1)
  return solve(1)
  function solve(currDay: number) {
    if (currDay > lastDay) {
      return 0
    }
    if (!required.has(currDay)) {
      return solve(currDay + 1)
    }
    if (dp[currDay] != -1) {
      return dp[currDay]
    }
    let one = oneD + solve(currDay + 1)
    let seven = sevenD + solve(currDay + 7)
    let thrity = thrityD + solve(currDay + 30)
    dp[currDay] = Math.min(...[one, seven, thrity])
    return dp[currDay]
  }
}
console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]))
