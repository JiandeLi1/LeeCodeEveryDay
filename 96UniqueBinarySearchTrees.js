/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp=Array(n+1).fill(0);
    dp[0]=1
    dp[1]=1
    for(let i=2;i<=n;i++){
        for(let j=0;j<i;j++){
            dp[i]+=(dp[j]*dp[i-j-1])
        }
    }
    return dp[n]
};