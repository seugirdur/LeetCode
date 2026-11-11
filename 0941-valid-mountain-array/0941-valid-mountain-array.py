class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 2:
            return False
        old = arr[0]
        dec = False
        is_mountain = True
        inc = False
        should_dec = False

        for curr in arr[1:]:
            if curr > old:
                inc = True
                if dec:
                    is_mountain = False
            elif curr == old:
                is_mountain = False
            else:
                dec = True
            
            old = curr

        if inc and dec and is_mountain:
            return True

        return False
                


        