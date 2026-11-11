class Solution:
    def grayCode(self, n: int) -> List[int]:
        

        def gray_code_strings(n):
            res = ["0", "1"]
            for i in range(2, n + 1):
                # reflect
                rev = res[::-1]
                # prefix 0 and 1
                res = ["0" + code for code in res] + ["1" + code for code in rev]
            return res
        codes = gray_code_strings(n)
        return [int(x, 2) for x in codes]