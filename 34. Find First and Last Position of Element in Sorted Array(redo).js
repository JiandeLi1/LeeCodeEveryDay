/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let range = [-1,-1]
    let l=0;
    let r=nums.length-1
    /*
     [5,7,7,8,8,10]
     l=0,r=5=>m=2
     
    */
    
    while(l<r){
        let m = Math.floor((l+r)/2)
        if(nums[m]>target||nums[m]===target){
             r=m
         }else{
             l=m+1
         }
    }
    if(nums[l]===target){
        range[0]=l
    }else{
        return range
    }
    r=nums.length-1
    while(l<=r){
        let m = Math.floor((l+r)/2)
        if(nums[m]===target){
             l=m+1
         }else{
             r=m-1
         }
    }
    range[1]=r
    return range
    
};