from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        prefix = [1] * n
        for i in range(1, n):
            prefix[i] = nums[i - 1] * prefix[i - 1]
        postfix = [1] * n
        for i in range(n - 2, -1, -1):
            postfix[i] = nums[i + 1] * postfix[i + 1]
        return [a * b for a, b in zip(prefix, postfix)]


a = Solution()
r = a.productExceptSelf([1, 2, 3, 4])
print(r)
