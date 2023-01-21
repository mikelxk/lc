from typing import List


class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        sum = 0
        digitSum = 0
        for i in nums:
            digits = [*str(i)]
            for d in digits:
                digitSum += int(d)
            sum += i
        return abs(sum - digitSum)


a = Solution()
r = a.differenceOfSum([1, 2, 3, 4])
print(r)
