from collections import Counter
from typing import List


class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        prefixMod = res = 0
        modGroup = Counter()
        modGroup[0] = 1
        for i in nums:
            prefixMod = (prefixMod + k + i % k) % k
            res += modGroup[prefixMod]
            modGroup[prefixMod] += 1
        return res
