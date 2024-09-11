type Colors = "R" | "G" | "B" | "Y"

function matchThree(boards: Colors[][]) {
  //horizontal
  let res: [number, number][] = []
  function testHorizontal(h: number) {
    let count = 1
    let preMatched: [number, number][] = [[0, 0]]
    for (let i = 1; i < boards[h].length; i++) {
      if (boards[h][i] == boards[h][i - 1]) {
        count++
        preMatched.push([h, i])
        if (count >= 3) {
          res.push(...preMatched)
        }
      } else {
        count = 1
        preMatched = [[h, i]]
      }
    }
  }
  function testVertical(v: number) {
    let count = 1
    let preMatched: [number, number][] = [[0, 0]]
    for (let i = 1; i < boards.length; i++) {
      if (boards[i][v] == boards[i - 1][v]) {
        count++
        preMatched.push([i, v])
        if (count >= 3) {
          res.push(...preMatched)
        }
      } else {
        count = 1
        preMatched = [[i, v]]
      }
    }
  }
  for (let i = 0; i < boards.length; i++) {
    testHorizontal(i)
  }
  for (let i = 0; i < boards[0].length; i++) {
    testVertical(i)
  }
  return res
}
let input = [
  ["G", "B", "B", "B", "G"],
  ["G", "Y", "R", "B", "G"],
  ["G", "Y", "B", "G", "Y"],
  ["R", "Y", "Y", "Y", "R"],
  ["B", "Y", "R", "G", "Y"],
]
let matchedRes = matchThree(input as Colors[][])
for(let [i, j] of matchedRes) {
  input[i][j] = "X"
}
console.log(input)