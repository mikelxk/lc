class Solution {
  prefix = new Array<number>()
  w = []
  constructor(w: number[]) {
    this.w = w
    this.prefix.push(w[0])
    for (let i = 1; i < w.length; ++i) {
      this.prefix.push(w[i] + this.prefix.at(-1))
    }
    let sum = this.prefix.at(-1)
    for (let i = 0; i < this.prefix.length; ++i) {
      this.prefix[i] /= sum
    }
  }

  pickIndex(): number {
    let target = Math.random()
    for (let i = 0; i < this.prefix.length; ++i) {
      if (target < this.prefix[i]) {
        return i
      }
    }
  }
}
let s = new Solution([3, 14, 1, 7])
console.log(s.pickIndex())
console.log(s.pickIndex())
