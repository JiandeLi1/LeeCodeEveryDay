/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res=[]
    let item=[]
    candidates.sort((a,b)=>a-b)
    const len=candidates.length
    const helper=(index,sum)=>{
        if(index>len || sum>target) return
        if(sum===target){
            res.push([...item])
            return
        }
        for(let i=index;i<len;i++){
         if(i>index && candidates[i]==candidates[i-1]) continue
         item.push(candidates[i])
         helper(i+1,sum+candidates[i])
         item.pop()
        }
    }
    helper(0,0)
    return res
}