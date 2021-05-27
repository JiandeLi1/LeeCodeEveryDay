/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/*

   ''  h  o  r  s  e
""[ 0, 1, 2, 3, 4, 5 ],
r [ 1, 1, 2, 2, 3, 4 ],
o [ 2, 2, 1, 2, 3, 4 ],
s [ 3, 3, 2, 2, 2, 3 ]

I use i=2 and j=2 to be a example,
when i and j=2, r!=s, we can see there are 3 situation to get the last min change amount,
1, hor and ro,someting, if both last letter are same, this situation will be the min
2, ho and ros,if both last letter are same, this situation will be the min
3, ho and ro, both last same , this is the min

Using DP, the last position is the answer!
*/
var minDistance = function(word1, word2) {
   let len1=word1.length;
    let len2=word2.length;
    let dp=Array.from(Array(len2+1), ()=>new Array(len1+1));
    dp[0][0]=0;
    for(let i=1;i<=len1;i++){
        dp[0][i]=i;
    }
    for(let j=1;j<=len2;j++){
        dp[j][0]=j;
    }
    for(let i=1;i<=len2;i++){
       for(let j=1;j<=len1;j++){
         dp[i][j]= word1.charAt(j-1)==word2.charAt(i-1) ?
               dp[i-1][j-1] :
               Math.min(dp[i-1][j],
                        dp[i][j-1],
                        dp[i-1][j-1])+1;
       }
    }
    console.log(dp)
    return dp[len2][len1];
};