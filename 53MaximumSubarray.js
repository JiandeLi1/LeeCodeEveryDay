/**
 * @param {number[]} nums
 * @return {number}
 */
/*
If we find that any element in the nums is larger than the sum of before
accumulation, we have a new start. Before we start the new part, check the 
result and the accumulation, if accumulation is larger than result, result
equal the accumulation.
*/

var maxSubArray = function(nums) {
    let result = nums[0];
    let dp=0;
   nums.forEach((item)=>{
        dp=Math.max(item,dp+item);
        result=Math.max(dp, result);
    })
    return result;
};