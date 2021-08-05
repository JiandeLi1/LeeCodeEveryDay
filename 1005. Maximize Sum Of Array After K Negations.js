/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let i=0
    // let sort=false
    // while(k>0){
    //     if(nums[i]<0){
    //         nums[i]=-nums[i]
    //         i+=1
    //         if(i>=nums.length) i=0
    //     }else{
    //         if(!sort){
    //             sort=true
    //             nums.sort((a,b)=>a-b)
    //         }
    //         nums[0]=-nums[0]
    //     }
    //     k-=1   
    // }
    
    
    while(k>0){
        nums[i]=-nums[i]
        if(i+1<nums.length && nums[i]>nums[i+1]){
            i+=1
        }
        k-=1
    }
    return nums.reduce((a,b)=>a+b,0)
};