/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // if (s.length===0) return true
    // let index=0
    // let count=0
    // for(let i=0;i<s.length;i++){
    //     while(t[index]!=s[i] && index<t.length){
    //         index+=1
    //     }
    //     if(t[index]===s[i]){
    //        count+=1
    //         index++
    //        if(count===s.length) return true
    //     }
    // }
    // return false
    
//     const n= s.length
//     const m= t.length
//     let i=0;
//     let j=0;
//     while(i<n && j<m){
//         if(s[i]===t[j]){
//             i++
//         }
//         j++
//     }
    
//     return i===n
    let [m,n]=[s.length, t.length]
    let dp = new Array(m+1).fill(0).map(x=>new Array(n+1).fill(0))
    for(let i=1; i<=m; i++){
        for(let j=1; j<=n;j++){
            t[j-1]===s[i-1] ? dp[i][j]=1+dp[i-1][j-1] : dp[i][j]=dp[i][j-1];
        }
    }
    return dp[m][n] === m
};