function canJump(nums: number[]): boolean {
  let goal = nums.length - 1
  for (let i = goal - 1; i >= 0; --i) {
    if (i + nums[i] >= goal) {
      goal = i
    }
  }
  return goal == 0
}
function canJumpDP(nums: number[]): boolean {
  let n = nums.length
  let reachable = new Array(n).fill(false)
  reachable[n - 1] = true
  for (let i = n - 2; i >= 0; --i) {
    let jumpIdx = nums[i] + i
    for (let j = i; j <= jumpIdx; ++j) {
      if (reachable[j]) {
        reachable[i] = true
        break
      }
    }
  }
  return reachable[0]
}
console.log(canJump([3, 2, 1, 0, 4]))
