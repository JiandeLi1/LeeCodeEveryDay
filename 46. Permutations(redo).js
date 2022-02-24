var permute = function(nums) {
    let res=[]
    const len=nums.length
    let record = Array(len).fill(false)
    const bt =(curr)=>{
        if(curr.length===len){
            res.push([...curr])
            return
        }
        for(let i=0;i<len;i++){
            if (!record[i]){
                curr.push(nums[i])
                record[i]=true
                bt(curr)
                curr.pop()
                record[i]=false
            }
        }
    }
    bt([])
    return res
};