function generate(numRows: number): number[][] {
  let res: number[][] = [[1], [1, 1]]
  if (numRows == 1) {
    return [[1]]
  }
  if (numRows == 2) {
    return [[1], [1, 1]]
  }
  for (let i = 2; i < numRows; ++i) {
    let row = [1]
    let prevRow = res.at(-1)
    for (let j = 0; j < prevRow.length - 1; ++j) {
      row.push(prevRow[j] + prevRow[j + 1])
    }
    res.push([...row, 1])
  }
  return res
}
generate(5)
