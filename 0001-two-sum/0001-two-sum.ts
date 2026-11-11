function twoSum(nums: number[], target: number): number[] {
    let hashMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let sobra = target - nums[i] ;
        if (hashMap.has(sobra)) {
            return [hashMap.get(sobra)!, i]
        }
        hashMap.set(nums[i], i)
    }
    return []

};