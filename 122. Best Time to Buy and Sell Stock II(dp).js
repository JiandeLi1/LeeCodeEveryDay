/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n= prices.length
    let dp0=0
    let dp1=-prices[0]
    for(let i=1;i<n;i++){
        dp0=Math.max(dp0, dp1+prices[i])
        dp1=Math.max(dp1, dp0-prices[i])
    }
    return dp0
};