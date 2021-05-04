/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
rightmost=farest we can go=the largest accumulation of 
index + steps(the val in the index) we has 
For each index, we add the index and how many steps can the index go,
if a rightmost point we can go is larger than of equal the length of nums,
that means that index can reach the end, return true, halt.
If the rightmost point we can reach is less than current index, than means in a
specific index, there is no way to continue go on, return false, halt. 
*/
var canJump = function(nums) {
    let end=0;
    let len=nums.length;
    for(let i=0;i<len&&end<len;i++){
        if(i>end){return false;}
        end=Math.max(end,i+nums[i]);
    }
    return true;
};