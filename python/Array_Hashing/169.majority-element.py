from collections import Counter
from typing import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        numCnt = Counter(nums)
        n = len(nums)
        for k, v in numCnt.items():
            if v > n / 2:
                return k
