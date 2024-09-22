from collections import Counter
from typing import List


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0
        for i in range(1, len(dp)):
            for idx, coin in enumerate(coins):
                if i < coin:
                    continue
                dp[i] = min(dp[i], dp[i - coin] + 1)

        if dp[amount] == amount + 1:
            return -1
        else:
            return dp[amount]
