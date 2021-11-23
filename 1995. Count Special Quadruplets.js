/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let len=nums.length
    let count=0
    for(let i=0;i<=len-4;i++){
        for(let j=i+1;j<=len-3;j++){
            for(let k=j+1;k<=len-2;k++){
                for(let l=k+1;l<=len-1;l++){
                    if(nums[i]+nums[j]+nums[k]===nums[l]) count++
                }
            }
        }
    }
    
    return count
};