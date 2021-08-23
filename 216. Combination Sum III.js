/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = []
    
    const backTracking = (keeper,start,sum) => {
        if(keeper.length>k || sum>n) return
        if(keeper.length === k && sum===n){
            res.push([...keeper])
            return
        }
        for(let i=start;i<=9;i++){
            keeper.push(i)
            backTracking(keeper,i+1,sum+i)
            keeper.pop()
        }
    }
    
    backTracking([],1,0)
    return res
};