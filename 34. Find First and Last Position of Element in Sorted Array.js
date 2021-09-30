/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length) return [-1,-1]
    let res=[-1,-1]
    let l=0
    let r=nums.length-1
    while(l<=r){
          let m=Math.floor((l+r)/2)
          if(nums[m]<target){
              l=m+1
          }else{
              r=m-1
          }
    }
    if(nums[l]===target){
     res[0]=l   
    }
    r=nums.length-1
    while(l<=r){
          let m=Math.floor((l+r)/2)
          if(nums[m]<=target){
              l=m+1
          }else{
              r=m-1
          }
    }
    if(nums[r]===target){
     res[1]=r  
    }
    return res
};