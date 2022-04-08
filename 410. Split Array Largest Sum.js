/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let l=Math.max(...nums)
    let r=nums.reduce((a,b)=>a+b,0)
    const countSplit=(max)=>{
        let sum=0
        let count=0
        for(let i=0;i<nums.length;i++){
            if(nums[i]+sum>max){
                sum=nums[i]
                count+=1
            }else{
                sum+=nums[i]
            }
        }
        return count+1
    }
    let result=0
    while(l<=r){
       let mid=Math.floor((l+r)/2)
       if(countSplit(mid)<=m){
          r=mid-1
           result=mid
        }else{
          l=mid+1
        }
    }
    
    
    return result
};