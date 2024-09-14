function findDifferentBinaryString(nums: string[]): string {
  let dec: number[] = []
  for (let n of nums) {
    dec.push(parseInt(n, 2))
  }
  let bLength = nums[0].length
  dec.sort((a, b) => a - b)
  console.log(dec)
  for (let i = 0; i < dec.length; i++) {
    if (dec[i] !== i) {
      return i.toString(2).padStart(bLength, "0")
    }
  }
  return dec.length.toString(2).padStart(bLength, "0")
}
console.log(findDifferentBinaryString(["01", "10"])) // expect "00" or "11" or "01" or "10
