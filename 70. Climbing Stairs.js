/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // if(n==1||n==2){
    //     return n
    // }
    // return climbStairs(n-1)+climbStairs(n-2)
    let dp=[0,1,2];
    for(let i=3;i<=n;i++){
        dp.push(dp[i-2]+dp[i-1])
    }
    return dp[n];
};