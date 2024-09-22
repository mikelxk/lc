function searchInsert(nums: number[], target: number): number {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] == target) {
      return mid
    }
    if (nums[mid] > target) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return nums[low] < target ? low + 1 : low
}
