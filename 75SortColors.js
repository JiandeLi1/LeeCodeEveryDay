/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p1=0;
    let i=0;
    let p2=nums.length-1;
    while(i<=p2){
        if (nums[i]==0&&i>p1){
            nums[i]=nums[p1];
            nums[p1++]=0;
            
        }else if (nums[i]==2){
            nums[i]=nums[p2];
            nums[p2--]=2;
            
        }
        else{
            i+=1;
            
        }
    }
};