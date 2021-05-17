/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Sort the nums, using greedy
*/
var maximumGap = function(nums) {
    if(nums.length==1){return 0};
    let result=0;
    let len=nums.length-1;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<len;i++){
        result=Math.max(result,nums[i+1]-nums[i]);
    }
    return result;
};