class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0
        
        # dp[i-2] e dp[i-1]
        prev = 1   # dp[0] = 1  (base teórica)
        curr = 1   # dp[1] = 1  (primeiro dígito não é '0')
        
        for i in range(1, len(s)):
            temp = 0
            
            # usar s[i] sozinho
            if s[i] != '0':
                temp += curr
            
            # usar s[i-1:i+1] como par
            if '10' <= s[i-1:i+1] <= '26':
                temp += prev
            
            # avança as janelas
            prev, curr = curr, temp
        
        return curr
