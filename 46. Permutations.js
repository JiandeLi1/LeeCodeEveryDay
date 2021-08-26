/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[]
    const len= nums.length
    const backTracking = (keeper, record) =>{
        if(keeper.length===len){
            res.push([...keeper])
            return
        }
        
        for(let i=0;i<len;i++){
            if(record[i]) continue
            keeper.push(nums[i])
            record[i]=true
            backTracking(keeper, record)
            keeper.pop()
            record[i]=false
        }
    }
    backTracking([],Array(nums.length).fill(false))
    return res
    
};