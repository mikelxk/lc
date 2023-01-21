from collections import Counter
from typing import List


class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        dp = Counter()
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                diff = nums[j] - nums[i]
                dp[j, diff] = dp.get((i, diff), 1) + 1
        return max(dp.values())


a = Solution()
print(a.longestArithSeqLength([3, 6, 9, 12]))
