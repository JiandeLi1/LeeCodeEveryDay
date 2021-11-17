/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const len = nums.length
    let min= nums[0]
    let mid = Infinity
    for(let i=1;i<len;i++){
        if(nums[i]>mid) return true
        nums[i]>min ? mid=nums[i] : min=nums[i];
    }
    return false
};