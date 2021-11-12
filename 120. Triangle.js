/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n=triangle.length
    let ans=new Array(n)
    for(let i=0;i<n;i++){
        ans[i]=new Array(i+1)
    }
    ans[0][0]=triangle[0][0]
    for(let i=1;i<n;i++){
        ans[i][0]=triangle[i][0]+ans[i-1][0]
        for(let j=1;j<i;j++){
            ans[i][j]=triangle[i][j]+ Math.min(ans[i-1][j], ans[i-1][j-1])
        }
        ans[i][i]=triangle[i][i]+ans[i-1][i-1]
    }
    return Math.min(...ans[n-1])
};
