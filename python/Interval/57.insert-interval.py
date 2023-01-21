from typing import List


class Solution:
    def insert(
        self, intervals: List[List[int]], newInterval: List[int]
    ) -> List[List[int]]:
        newStart, newEnd = newInterval
        l, r = [], []
        for i in intervals:
            s, e = i
            if e < newStart:
                l.append(i)
            elif s > newEnd:
                r.append(i)
            else:
                newStart = min(newStart, s)
                newEnd = max(newEnd, e)
        return l + [[newStart, newEnd]] + r
