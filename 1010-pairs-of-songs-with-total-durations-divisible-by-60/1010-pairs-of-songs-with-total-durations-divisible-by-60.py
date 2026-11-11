class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        pairs = {}
        pairs_count = 0
        for t in time:
            rest = t % 60
            complement = (60 - rest) % 60
            if complement in pairs:
                pairs_count += pairs[complement]
            if rest not in pairs:
                pairs[rest] = 0
            pairs[rest] += 1


        return pairs_count
            