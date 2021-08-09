/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res=[]
    let item=[]
    nums.sort((a,b)=>a-b)
    const len= nums.length
    const helper=(inx)=>{
        res.push([...item])
        if(inx>len) return
        for(let i=inx;i<len;i++){
            if (i>inx  && nums[i] == nums[i - 1]) continue;
            item.push(nums[i])
            helper(i+1)
            item.pop()
        }
    }
    helper(0)
    return res
};