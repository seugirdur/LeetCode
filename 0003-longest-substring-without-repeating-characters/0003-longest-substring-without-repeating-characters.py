class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        s_list = list(s)
        unique = []
        lastUnique = []

        for char in s_list:
            while char in unique:
                unique.pop(0)
            unique.append(char)
            if len(unique) > len(lastUnique):
                lastUnique = list(unique)
        
        return len(lastUnique)
        

