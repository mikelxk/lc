from typing import List


class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res = set()

        def backtrack(curr: List[int], start: int):
            currLen = len(curr)
            if start == n:
                if currLen >= 2:
                    res.add(tuple(curr))
                return
            val = nums[start]
            if not currLen or curr[-1] <= val:
                backtrack(curr + [val], start + 1)
            backtrack(curr, start + 1)

        backtrack([], 0)
        return res


a = Solution()
print(a.findSubsequences([4, 6, 7, 7]))
