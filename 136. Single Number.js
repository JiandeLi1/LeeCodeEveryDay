/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // if(nums.length==1) return nums[0] 
    // nums.sort((a,b)=>a-b)
    // if(nums[0]!=nums[1]) return nums[0]
    // if(nums[nums.length-1]!=nums[nums.length-2]) return nums[nums.length-1]
    // for(let i=1;i<nums.length-1;i++){
    //     if(nums[i]!=nums[i-1] && nums[i]!=nums[i+1]) return nums[i]
    // }
    
    let n=0
    for(let num of nums){
        n ^=num
    }
    return n
};