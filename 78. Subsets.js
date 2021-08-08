/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[]
    let item=[]
    const len=nums.length
    const helper=(index)=>{
        if(index>len) return
        res.push([...item])
        for(let i=index; i<len;i++){
            item.push(nums[i])
            helper(i+1,item)
            item.pop()
        }
    }
    helper(0)
    return res
};