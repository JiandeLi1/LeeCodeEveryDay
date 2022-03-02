/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    /*
        [1,2,3]
        res=[] curr=[]
    
        bt([])->->bt([1])->bt([1,2])->bt([1,2,3])->pop
                            pop
                  bt([1,3])->pop
                      pop
                  bt([2])->bt([2,3])->pop
                     pop
                  bt([3])
    */
    let res=[[]]
    const bt =(idx,curr)=>{
        if(idx>=nums.length) return
        for(let i =idx;i<nums.length;i++){
            curr.push(nums[i])
            res.push([...curr])
            bt(i+1,curr)
            curr.pop()
        }
    }
    bt(0,[])
    return res
};