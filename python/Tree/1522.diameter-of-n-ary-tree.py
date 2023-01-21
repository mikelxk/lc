from typing import List, Optional


class Node:
    children: Optional[List["Node"]]
    val: int

    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []


class Solution:
    def diameter(self, root: "Node") -> int:
        res = 0

        def dfs(root: "Node"):
            nonlocal res
            depths = [0, 0]
            for child in root.children:
                depths.append(dfs(child))
                res = max(res, sum(sorted(depths)[-2:]))
            return max(depths) + 1

        dfs(root)
        return res
