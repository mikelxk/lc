function diffWaysToCompute(input: string): number[] {
  let res: number[] = []

  for (let i = 0; i < input.length; i++) {
    let c = input[i]

    if (c === "-" || c === "+" || c === "*") {
      for (let x of diffWaysToCompute(input.substring(0, i))) {
        for (let y of diffWaysToCompute(input.substring(i + 1))) {
          if (c === "-") {
            res.push(x - y)
          } else if (c === "+") {
            res.push(x + y)
          } else if (c === "*") {
            res.push(x * y)
          }
        }
      }
    }
  }
  if (res.length === 0) {
    res.push(parseInt(input))
  }

  return res
}
let result = diffWaysToCompute("2-1-1-1-1")
console.log(result)
