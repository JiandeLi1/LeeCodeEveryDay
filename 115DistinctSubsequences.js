/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
/*
Time complexity: O(nm)
Space complexity: O(nm)
Make a 2D array:
exapmle: s='babgbag', t='bag'
 '' b a b g b a g 
''1 1 1 1 1 1 1 1
b 0 1 1 2 2 3 3 3 
a 0 0 1 1 1 1 4 4 
g 0 0 0 0 1 1 1 5

we set first row are 1, first col are 0; k is len of t, m is len of s
dp[k][m]=(t.charAt(k-1)==s.charAt(m-1) ?dp[k][m-1]+dp[k-1][m-1] : dp[k][m-1])
if t.charAt(k-1)==s.charAt(m-1), means they are match. 
Get the sum of how many match you have before
*/
var numDistinct = function(s, t) {
    let sLen=s.length+1;
    let tLen=t.length+1;
    let dp=Array.from(Array(tLen), () => new Array(sLen));
    for(let i=0;i<sLen;i++){
        dp[0][i]=1;
    };
    for(let j=1;j<tLen;j++){
        dp[j][0]=0;
    };
    
    for(let k=1;k<tLen;k++){
        for(let m=1;m<sLen;m++){
            dp[k][m]=(t.charAt(k-1)==s.charAt(m-1) ?
                      dp[k][m-1]+dp[k-1][m-1] :
                      dp[k][m-1])
        }
    }
return dp[dp.length-1][dp[0].length-1]
};