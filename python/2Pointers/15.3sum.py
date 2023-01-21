from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        n = len(nums)
        for i, a in enumerate(nums):
            if i > 0 and a == nums[i - 1]:
                continue
            l, r = i + 1, n - 1
            while l < r:
                sum = a + nums[l] + nums[r]
                if sum > 0:
                    r -= 1
                elif sum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
        return res


class Solution2:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res, dups = set(), set()
        seen = {}
        for i, vali in enumerate(nums):
            if vali not in dups:
                dups.add(vali)
                for valj in nums[i + 1 :]:
                    complement = -vali - valj
                    if complement in seen and seen[complement] == i:
                        res.add(tuple(sorted((vali, valj, complement))))
                    seen[valj] = i
        return res
