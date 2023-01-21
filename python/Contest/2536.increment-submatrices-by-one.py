from typing import List


class Tree:
    def __init__(self, n):
        self.n = n
        self.tree = [[0] * (n + 1) for _ in range(n + 1)]

    def update(self, x, y, val):
        x += 1
        y += 1
        while x <= self.n:
            yy = y
            while yy <= self.n:
                self.tree[x][yy] += val
                yy += yy & -yy
            x += x & -x

    def query(self, x, y):
        x += 1
        y += 1
        res = 0
        while x > 0:
            yy = y
            while yy > 0:
                res += self.tree[x][yy]
                yy -= yy & -yy
            x -= x & -x
        return res


class Solution:
    def rangeAddQueries(self, n: int, query: List[List[int]]) -> List[List[int]]:
        fenwick = Tree(n)
        for row1, col1, row2, col2 in query:
            fenwick.update(row1, col1, 1)
            fenwick.update(row1, col2 + 1, -1)
            fenwick.update(row2 + 1, col1, -1)
            fenwick.update(row2 + 1, col2 + 1, 1)
        res = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                res[i][j] = fenwick.query(i, j)
        return res


a = Solution()
r = a.rangeAddQueries(3, [[1, 1, 2, 2], [0, 0, 1, 1]])
print(r)
