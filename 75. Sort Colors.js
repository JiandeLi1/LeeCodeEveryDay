/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    /*
    [2,0,1]
    */
    
    let idx=0;
    let z=0;
    let t=nums.length-1
    
    while(idx<=t){
         if(nums[idx]===2){
             [nums[idx],nums[t]]= [nums[t],nums[idx]]   
             t--
         }else if(nums[idx]===0){
             [nums[idx],nums[z]]= [nums[z],nums[idx]]
             idx++
             z++
         }else{
             idx++
         }
    }
};