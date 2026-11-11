class Solution:
    def longestPalindrome(self, s: str) -> str:

        longest_palindrome = ""
        origin_word = s

        while len(origin_word) > len(longest_palindrome):
            while len(s) > len(longest_palindrome):
                if s == s[::-1]:
                    if len(longest_palindrome) < len(s):
                        longest_palindrome = s
                else:
                    s = s[:-1]
        
            origin_word = origin_word[1:]
            s = origin_word

        return longest_palindrome
        