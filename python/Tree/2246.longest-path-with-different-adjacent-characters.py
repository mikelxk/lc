from collections import defaultdict
from typing import List


class Solution:
    def longestPath(self, parent: List[int], s: str) -> int:
        children = defaultdict(list)
        for end, start in enumerate(parent):
            children[start].append(end)
        res = 1

        def dfs(currNode: int):
            nonlocal res
            longestChain, secondLongest = 0, 0
            for child in children[currNode]:
                longestFromChild = dfs(child)
                if s[currNode] == s[child]:
                    continue
                if longestFromChild > longestChain:
                    secondLongest = longestChain
                    longestChain = longestFromChild
                elif longestFromChild > secondLongest:
                    secondLongest = longestFromChild
            res = max(res, longestChain + secondLongest + 1)
            return longestChain + 1

        dfs(0)
        return res


a = Solution()
r = a.longestPath([-1, 0, 0, 1, 1, 2], "abacbe")
print(r)
