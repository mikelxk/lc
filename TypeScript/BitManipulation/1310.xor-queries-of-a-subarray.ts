function xorQueries(arr: number[], queries: number[][]): number[] {
  let res: number[] = []
  for (let i = 0; i < queries.length; ++i) {
    let [l, r] = queries[i]
    let x = arr[l]
    for (let j = l; j < r; ++j) {
      x ^= arr[j + 1]
    }
    res.push(x)
  }
  return res
}
console.log(
  xorQueries(
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ]
  )
)
