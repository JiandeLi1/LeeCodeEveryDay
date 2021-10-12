/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let l=0
    let r=nums.length-1
    let first=nums[0]
    let last=nums[nums.length-1]
    
    while(l<=r){
       let m= Math.floor((l+r)/2)
       if(nums[m]===target) return m
       if(nums[l]<=nums[m]){
           if(nums[m]>=target && nums[l]<=target){
               r=m-1
           }else{
              l=m+1
           }
        }else{
            if(nums[m]<=target && nums[r]>=target){
               l=m+1
           }else{
               r=m-1  
            } 
        }
    }
    return -1;
};