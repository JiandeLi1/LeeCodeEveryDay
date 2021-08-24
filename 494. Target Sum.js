/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Time complexity: O(2^n)
Space complexity: O(n)
*/
var findTargetSumWays = function(nums, target) {
    let res=0
    const len= nums.length
    const backTracking=(start,sum)=>{
        if(start===len){
            if(sum===target){
             res+=1   
            }
            return
        }
        backTracking(start+1, sum+nums[start])
        backTracking(start+1, sum-nums[start])   
    }
    backTracking(0,0)
    return res
    
};