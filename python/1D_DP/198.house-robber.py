from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        for i in range(2, len(nums)):
            if i == 2:
                nums[i] += nums[i - 2]
            else:
                nums[i] += max(nums[i - 2], nums[i - 3])

        return max(nums[-1], nums[-2])


s = Solution()
s.rob([2, 7, 9, 3, 1])
