from typing import List


class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        total = sum(nums)
        maxSum = minSum = currMin = currMax = nums[0]
        for n in nums[1:]:
            currMin = min(n, currMin + n)
            minSum = min(minSum, currMin)
            currMax = max(n, currMax + n)
            maxSum = max(maxSum, currMax)

        return max(total - minSum, maxSum) if total != minSum else maxSum


a = Solution()
r = a.maxSubarraySumCircular([-3, -2, -3])
print(r)
