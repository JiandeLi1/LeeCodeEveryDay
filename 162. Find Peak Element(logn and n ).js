/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    /*
    O(n)
        let p = 0;
        if(nums.length===1) return p
        for(let i=0;i<nums.length;i++){
            if(nums[p]<nums[i]){
                p=i
            }
        }
        return p
    */
    /*O(logn)*/
    let l=0
    let r=nums.length
    while(l<r){
        const m= Math.floor((r+l)/2)
        if(nums[m]<nums[m+1]){
            l=m+1
        }else{
            r=m 
        }
    }
    
    return r
    
};