from collections import defaultdict
from typing import List, Set


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        colSets = {}
        boxSets = {}
        for i in range(9):
            colSets[i] = set()
        for i in range(3):
            for j in range(3):
                boxSets[(i, j)] = set()

        def validate(s: Set[str], grid: str):
            if grid in s:
                return False
            s.add(grid)
            return True

        for i, row in enumerate(board):
            rowSet: Set[str] = set()
            for j, grid in enumerate(row):
                if grid != ".":
                    if (
                        not validate(rowSet, grid)
                        or not validate(colSets[j], grid)
                        or not validate(boxSets[(i // 3, j // 3)], grid)
                    ):
                        return False

        return True


a = Solution()
r = a.isValidSudoku(
    [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ]
)
print(r)
