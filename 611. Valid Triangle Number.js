/**
 * @param {number[]} nums
 * @return {number}
 */
/*
nums is sorted [1,2,3,4,5,6]
i,j,k, i and j are the font, if nums[k] is larger than nums[i]+nums[j], stop
count+=k-j-1 (K is the first number that nums[k] >= nums[i]+ nums[j], need -1 ) 
*/

var triangleNumber = function(nums) {
    let count=0
    const len=nums.length
    nums.sort((a,b)=>a-b)
    for(let i=0;i<len-2;i++){
        let k=i+2
        for(let j=i+1;j<len-1&&nums[i]!= 0;j++){
            while (nums[i]+nums[j]>nums[k] && k<len){
                 k++
            }
            count+=k-j-1
        }
    }    
    return count
};