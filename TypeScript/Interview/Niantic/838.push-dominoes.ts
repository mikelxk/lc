function pushDominoes(dominoes: string): string {
  type dominoState = "L" | "R" | "."
  let n = dominoes.length
  let symbols: [dominoState, number][] = [["L", -1]]
  for (let i = 0; i < n; i++) {
    if (dominoes[i] !== ".") {
      symbols.push([dominoes[i] as dominoState, i])
    }
  }
  symbols.push(["R", n])
  let res = dominoes.split("")
  for (let i = 0; i < symbols.length - 1; ++i) {
    let [state1, pos1] = symbols[i]
    let [state2, pos2] = symbols[i + 1]
    if (state1 == state2) {
      for (let j = pos1 + 1; j < pos2; j++) {
        res[j] = state1
      }
    } else if (state1 == "R" && state2 == "L") {
      for (let j = pos1 + 1; j < pos2; j++) {
        if (j - pos1 == pos2 - j) {
          res[j] = "."
        } else if (j - pos1 < pos2 - j) {
          res[j] = "R"
        } else {
          res[j] = "L"
        }
      }
    }
  }
  return res.join("")
}
console.log(pushDominoes(".L.R...LR..L..")) // "LL.RR.LLRRLL.."
