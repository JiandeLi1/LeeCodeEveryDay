/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let l=1, r=nums.length
    while(l<=r){
          let m=Math.floor((l+r)/2)
          let counter=0
          for(let a of nums){
              if(a>=m) counter+=1
          }
          if(m==counter){
              return m
          }
          if(m>counter){
             r=m-1
             }else{
             l=m+1
          }
    }
    return -1
};