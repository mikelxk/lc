from typing import List


class Solution:
    def getModifiedArray(self, length: int, updates: List[List[int]]) -> List[int]:
        res = [0] * length
        for start, end, val in updates:
            res[start] += val
            if end < length - 1:
                res[end + 1] -= val

        for i in range(1, length):
            res[i] += res[i - 1]
        return res


class SolutionFenwick:
    def getModifiedArray(self, length: int, updates: List[List[int]]) -> List[int]:
        tree = [0] * (length + 1)

        def getSum(k: int):
            s = 0
            while k > 0:
                print(k)
                s += tree[k]
                k -= k & -k
            return s

        def update(k: int, val: int):
            while k <= length:
                tree[k] += val
                k += k & -k

        def updateRange(l: int, r: int, val: int):
            update(l, val)
            update(r + 1, -val)

        for start, end, val in updates:
            updateRange(start + 1, end + 1, val)
        res = [0] * length
        for i in range(length):
            res[i] = getSum(i + 1)
        return res


a = SolutionFenwick()
r = a.getModifiedArray(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]])
print(r)
