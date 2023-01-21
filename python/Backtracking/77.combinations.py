from typing import List


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res: List[List[int]] = []

        def backtrack(first: int, curr: List[int]):
            if len(curr) == k:
                res.append(curr)
            for i in range(first, n + 1):
                backtrack(i + 1, curr + [i])

        backtrack(1, [])
        return res


a = Solution()
a.combine(2, 4)
