from typing import List


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res = []
        if n == 1:
            return [[nums[0]]]

        for i in range(n):
            num = nums[i]
            remaining = list(filter(lambda x: x != num, nums))
            for i, p in enumerate(self.permuteUnique(remaining)):
                print(p,num)
                res.append(tuple(p + [num]))

        return list(res)


s = Solution()
print(s.permuteUnique([1, 1, 2]))
