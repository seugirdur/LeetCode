class Solution:
    def countTime(self, time: str) -> int:

        possibility = 1

        hour_dec = time[0]
        hour_uni = time[1]

        min_dec = time[3]
        min_uni = time[4]

        if min_uni == "?":
            possibility *= 10

        if min_dec == "?":
            possibility *= 6

        if hour_uni == "?":
            if hour_dec == "?":
                possibility *= 24
            elif hour_dec == "2":
                possibility *= 4
            else:
                possibility *= 10
        else:
            if hour_dec == "?":
                if int(hour_uni) < 4:
                    possibility *= 3
                else:
                    possibility *= 2

        return possibility
         



        