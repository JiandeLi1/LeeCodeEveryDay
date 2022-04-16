/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let l=1
    let r=Math.max.apply(null,nums)
    const counter=(d)=>{
        let count = 0
        for(let i=0;i<nums.length;i++){
            count+=Math.ceil(nums[i]/d)
        }
        return count<=threshold
    }
    
    while(l<=r){
        const m = Math.floor((l+r)/2)
        if(counter(m)){
           r=m-1
        }else{
           l=m+1
        }
    }
    return l
};