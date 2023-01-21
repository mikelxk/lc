from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        s = set(nums)
        res = 0
        for n in s:
            if n - 1 not in s:
                curr = n
                currStreak = 1
                while curr + 1 in s:
                    curr += 1
                    currStreak += 1
                res = max(res, currStreak)
        return res
