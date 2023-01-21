from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res = localMax = nums[0]
        for i in nums[1:]:
            localMax = max(localMax + i, i)
            res = max(res, localMax)
        return res
