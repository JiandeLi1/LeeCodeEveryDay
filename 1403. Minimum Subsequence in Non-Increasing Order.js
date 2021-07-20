/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Time complexity: O(n*logn+n)
Space complexity: O(n)

Strategy: Sorting the nums decreasing. Make a temp array to copy the nums. The sum the
 temp[i]=temp[i]+temp[i+1] to record thesum of rest numbers. If sum of nums[i] > then
 temp[i+1] means sum of nums[i] is larger than the sum of rest numbers. Return the 
 first i digits numbers of nums.
 */
var minSubsequence = function(nums) {
   nums.sort((a,b)=>b-a)
   let temp=nums.slice()
   let count=0
   let sum=0
   for(let i=nums.length-2;i>=0;i--){
       temp[i]=temp[i]+temp[i+1]   
   }
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        count+=1
        if(i==nums.length-1 || sum>temp[i+1]){
            break
        }
    }
   nums.length=count
   return nums
};