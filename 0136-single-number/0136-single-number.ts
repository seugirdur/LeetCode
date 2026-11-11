function singleNumber(nums: number[]): number {
    let uniqueNum:number[] = []
    for (let i = 0; i < nums.length; i++) {
            let alreadyHas = false
        for (let j = 0; j < uniqueNum.length; j++) {
            if (nums[i] == uniqueNum[j]) {
                alreadyHas = true
                uniqueNum.splice(j, 1)
            }
        }
        if (!alreadyHas) {
            uniqueNum.push(nums[i])
        }
    }
    return uniqueNum[0]
};