/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const len=nums.length
    if(len<=1) return []
    let res=[]
    const backTracking = (curr, last,keeper) =>{
        if( curr === len){
            if(keeper.length>=2){
               res.push([...keeper])   
            }
            return
        }
        if(nums[curr] >= last){
           keeper.push(nums[curr])
           backTracking(curr+1, nums[curr], keeper)
            keeper.pop()
        }
        if(nums[curr] != last){
            backTracking(curr+1, last, keeper)
        }
        
    }
    backTracking(0,-101,[])
    return res
};