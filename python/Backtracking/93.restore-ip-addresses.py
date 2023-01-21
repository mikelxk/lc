from typing import List


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        res: List[str] = []
        sLen = len(s)

        def dfs(curr: List[str], index: int):
            n = len(curr)
            if n > 4:
                return
            if n == 4 and index >= sLen:
                res.append(".".join(curr))

            for i in range(1, 4):
                if index + i > sLen:
                    break
                subStr = s[index : index + i]
                if (subStr.startswith("0") and len(subStr) > 1) or (
                    i == 3 and int(subStr) >= 256
                ):
                    continue
                dfs(curr + [subStr], index + i)

        dfs([], 0)
        return res


a = Solution()
print(a.restoreIpAddresses("25525511135"))
