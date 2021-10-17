/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k===0) return false
    let m=new Map()
    for(let i=0;i<nums.length;i++){
        if(m.has(nums[i]) && i-m.get(nums[i])<=k){
            return true
        }
        m.set(nums[i],i)
    }
    return false
};