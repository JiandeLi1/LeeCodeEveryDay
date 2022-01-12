/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let res = []
    if (nums==null||nums.length<3) return res
    nums.sort((a,b)=>a-b)
    for(let i = 0;i<nums.length;i++){
        if(nums[i]>0) break
        if(nums[i]===nums[i-1]) continue
        let l = i+1
        let r = nums.length-1
        
        while(l<r){
            const sum = nums[i]+nums[l]+nums[r]
            if(sum===0){
                res.push([nums[i],nums[l],nums[r]])
                
                //Do this first, because if one of l or r
                //is equal the last index, half at same number
                while(l<r && nums[l]===nums[l+1]) l++
                while(l<r && nums[r]===nums[r-1]) r--
                //Now, do l++ or r-- make the l or r different
                l++
                r--
               
            }else if(sum<0){
                l++
            }else{
                r--
            }
        }
    }
    
    return res
};