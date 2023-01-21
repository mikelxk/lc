from collections import Counter, defaultdict
from typing import List


class Solution:
    def countGood(self, nums: List[int], k: int) -> int:
        occur = res = i = 0
        count = defaultdict(int)
        for j in range(len(nums)):
            occur += count[nums[j]]
            count[nums[j]] += 1
            while occur >= k:
                count[nums[i]] -= 1
                occur -= count[nums[i]]
                i += 1
            res += i
        return res


a = Solution()
r = a.countGood([1, 1, 1, 1, 1], 10)
print(r)
