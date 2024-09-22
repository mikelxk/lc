function findRadius(houses: number[], heaters: number[]): number {
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  let resArr = new Array<number>(houses.length).fill(Infinity)
  for (let i = 0, h = 0; i < houses.length && h < heaters.length; ) {
    if (houses[i] <= heaters[h]) {
      resArr[i] = heaters[h] - houses[i]
      ++i
    } else {
      ++h
    }
  }
  for (let i = houses.length - 1, h = heaters.length - 1; i >= 0 && h >= 0; ) {
    if (houses[i] >= heaters[h]) {
      resArr[i] = Math.min(resArr[i], houses[i] - heaters[h])
      --i
    } else {
      --h
    }
  }
  console.log(resArr)
  return Math.max(...resArr)
}
findRadius([1, 2, 3], [2])
