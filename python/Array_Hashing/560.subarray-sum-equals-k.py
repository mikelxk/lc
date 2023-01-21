from collections import Counter
from typing import List


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        res = sum = 0
        map = Counter()
        map[0] = 1
        for i in nums:
            sum += i
            res += map[sum - k]
            map[sum] += 1

        return res


a = Solution()
print(a.subarraySum([1, 1, 1], 2))
