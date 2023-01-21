from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        n = len(nums)
        l, i, r = 0, 0, n - 1
        while i <= r:
            match nums[i]:
                case 0:
                    nums[i], nums[l] = nums[l], nums[i]
                    l += 1
                    i += 1
                case 1:
                    i += 1
                case 2:
                    nums[r], nums[i] = nums[i], nums[r]
                    r -= 1
