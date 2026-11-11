class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows < 2:
            return s

        rows = [''] * numRows          # use strings; faster than list-of-lists + join
        row = 0                         # current row pointer
        step = 1                        # direction: +1 going down, -1 going up

        for ch in s:
            rows[row] += ch
            # flip direction at the top or bottom
            if row == 0:
                step = 1
            elif row == numRows - 1:
                step = -1
            row += step

        return ''.join(rows)

            




        

        