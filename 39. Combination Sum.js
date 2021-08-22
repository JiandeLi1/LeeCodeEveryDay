/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res=[]
    const len= candidates.length
    
    const backTracking=(keeper,index,sum)=>{
        if(sum>target) return
        if(sum===target){
            res.push([...keeper])
            return
        }
        for(let i=index; i<len; i++){
            keeper.push(candidates[i])
            backTracking(keeper, i, sum+candidates[i])
            keeper.pop()
        }
    }
    backTracking([],0,0);
    return res
};