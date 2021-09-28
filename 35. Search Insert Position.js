/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //Iter version
    // let l=0;
    // let r=nums.length-1;
    // let m=0
    // while(l<=r){
    //     m=Math.floor((r+l)/2)
    //     if(nums[m]<target){
    //         l=m+1
    //     }else if(nums[m]>target){
    //         r=m-1
    //     }else{
    //         return m
    //     }
    // }
    // return l
    
    //Rec version
    const rec=(l,r)=>{
      if(l>r) return l
      const m= Math.floor((l+r)/2)
      if(nums[m]>target){
         return  rec(l,m-1)
      }else if(nums[m]<target){
         return rec(m+1,r)
      }else{
          return m
      }
    }
    return rec(0,nums.length-1)
};