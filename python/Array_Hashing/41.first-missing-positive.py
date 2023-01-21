from typing import List


class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        nums = [max(a, 0) for a in nums]
        for i in range(n):
            val = abs(nums[i])
            if 1 <= val <= n:
                idx = val - 1
                if nums[idx] > 0:
                    nums[idx] = -nums[idx]
                elif nums[idx] == 0:
                    nums[idx] = -n - 1
        print(nums)
        for i in range(1, n + 1):
            if nums[i - 1] >= 0:
                return i
        return n + 1


a = Solution()
a.firstMissingPositive([1, 2, 0])
