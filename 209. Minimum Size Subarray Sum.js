/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let res = Math.pow(10,9)
    let fp=0
    const len= nums.length
    let sum=0
    for(let i=0;i<len;i++){
        sum+=nums[i]
        while(sum>=target){
              res=Math.min(res, i-fp+1)
              sum-=nums[fp++]
        }
        
    }
    return res === Math.pow(10,9) ? 0 : res
};