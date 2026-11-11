/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let hashMap = {}

    for (const num of nums) {
        if (hashMap[num] != undefined) {
            return true
        } else {
            hashMap[num] = true
        }
    }
    return false
    
};