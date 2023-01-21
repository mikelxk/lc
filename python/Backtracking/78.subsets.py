from typing import List


class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res: List[List[int]] = []
        n = len(nums)

        def backtrack(first: int, curr: List[int]):
            if len(curr) == k:
                res.append(curr)
                return
            for i in range(first, n):
                backtrack(i + 1, curr + [nums[i]])

        for k in range(n + 1):
            backtrack(0, [])
        return res
