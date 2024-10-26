function modExp(base: number, exp: number, mod: number): number {
  let result = 1
  base = base % mod
  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod
    }
    exp = Math.floor(exp / 2)
    base = (base * base) % mod
  }
  return result
}

function countGoodNumbers(n: number): number {
  let evenOccur = Math.floor(n / 2) + (n % 2)
  let oddOccur = Math.floor(n / 2)
  let m = 1e9 + 7 // Modulo 1,000,000,007

  // Use modular exponentiation to prevent overflow
  let evenPow = modExp(5, evenOccur, m)
  let oddPow = modExp(4, oddOccur, m)

  return (evenPow * oddPow) % m
}
