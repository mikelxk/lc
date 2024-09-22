class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1)
        for _, coin in enumerate(coins):
            for i in range(coin, amount):
                dp[i] += dp[i - coin]+1
        print(dp)
        return dp[amount]
