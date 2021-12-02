/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // if(n===0) return 0
    // if(n===1) return 1
    // return fib(n-1)+fib(n-2)
    
    let memo={}
    let helper=(x)=>{
        if(x===0||x===1) return x
        if(memo[x]) return memo[x]
        memo[x] = helper(x-1)+helper(x-2)
        return memo[x]
    }
    return helper(n)
};