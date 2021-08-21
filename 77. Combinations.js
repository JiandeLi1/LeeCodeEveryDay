/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/*
Time complixity: O(n^2)
space complexity: O(n)
*/
var combine = function(n, k) {
    let res=[]
    const backTracking=(keeper,a,b,count)=>{
        if (count===0){
            res.push([...keeper])
            return
        }
        
        for(let i=a; i<=b; i++){
            keeper.push(i)
            backTracking(keeper,i+1,b,count-1)
            keeper.pop()
        }
    }
    
    backTracking([],1,n, k)
    return res
};