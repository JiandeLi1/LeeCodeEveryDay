/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let len=nums.length;
    let copy=nums.slice().sort((a,b)=>a-b);
    if(len==1){return 0};
    let left=0;
    let right=len-1;
    for(let i=0;i<len;i++){
        if(copy[i]!=nums[i]){
            left=i;
            break;
        }
    }
    if(left==0&&copy[0]==nums[0]){return 0};
    for(let j=len-1;j>left;j--){
        if(copy[j]!=nums[j]){
            right=j;
            break;
        }
    }
    return right-left+1;
};