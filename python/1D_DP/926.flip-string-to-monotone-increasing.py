class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        res = prefixLen = 0
        for c in s:
            if c == "0":
                res = min(res + 1, prefixLen)
            else:
                prefixLen += 1
        return res
