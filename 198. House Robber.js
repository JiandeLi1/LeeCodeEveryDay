/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums.length) return 0
    if(nums.length==1) return nums[0]
    
    let first=nums[0]
    let max= Math.max(first,nums[1])
    
    for(let i=2;i<nums.length;i++){
        let temp=max
        max=Math.max(first+nums[i],max)
        first=temp
    }
    
    return max
};