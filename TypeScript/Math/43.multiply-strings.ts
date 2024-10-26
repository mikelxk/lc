function multiply(num1: string, num2: string): string {
  let m = num1.length,
    n = num2.length
  let pos = new Array<number>(m + n).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul =
        (num1.charCodeAt(i) - "0".charCodeAt(0)) *
        (num2.charCodeAt(j) - "0".charCodeAt(0))
      let p1 = i + j,
        p2 = i + j + 1
      let sum = mul + pos[p2]
      pos[p1] += Math.floor(sum / 10)
      pos[p2] = sum % 10
    }
  }
  return pos.reduce((a, b, i) => {
    if (b || a != "") {
      return a + b
    } else {
      return a
    }
  }, "")
}
console.log(multiply("123", "456"))
