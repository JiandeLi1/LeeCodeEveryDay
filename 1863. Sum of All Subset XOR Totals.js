/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let list=[]
    let res=[]
    const backTracking=(index,keeper)=>{
        if(index>=nums.length) return
        for(let i=index;i<nums.length;i++){
            keeper.push(nums[i])
            res.push([...keeper])
            backTracking(i+1, [...keeper])
            keeper.pop()
        }
    }
    backTracking(0,[])
    let sum=0
    for(let i=0;i<res.length;i++){
        if(res[i].length===1){
            sum+=res[i][0]
        }else{
            sum+=res[i].reduce((a,b)=>{
                return a^b
            })
        }
    }
    return sum
};