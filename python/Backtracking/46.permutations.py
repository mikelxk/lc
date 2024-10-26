from typing import List, Set


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res = []
        if n == 1:
            return [[nums[0]]]

        for i in range(n):
            num = nums[i]
            for i, p in enumerate(self.permute(list(filter(lambda x: x != num, nums)))):
                res.append(p + num)

        return res