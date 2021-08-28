/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res =[]
    const len = nums.length
    let m = new Map()
    for(let i=0;i<len ;i++){
        m.set(nums[i], m.get(nums[i]) ? m.get(nums[i])+1 : 1 )
    }
    
    const backTracking = (keeper) =>{
        if(keeper.length===len){
            res.push([...keeper])
            return
        }
        
        for(let [key, val] of m){
            if(val>0){
            m.set(key, m.get(key)-1)
            keeper.push(key)
            backTracking(keeper)
             m.set(key, m.get(key)+1)
            keeper.pop()
           }
    }
    }
    backTracking([])
    return res
};
