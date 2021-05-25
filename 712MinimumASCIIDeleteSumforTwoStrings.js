/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

/*
   ""           s             e          a
""[ 0,          115(s),       216(s+e),  313(s+e+a)]
e [ 101(e),     216(s+e),     115(s),    212(s+a)  ]
a [ 198(e+a),   313(s+e+a),   212(s+a),  115(s)    ]
t [ 314(e+a+t), 429(s+e+a+t), 328(s+a+t),231(s+t)  ]

First row is all delete for s1, fir collow is all detele for s2,
the last position for dp array[n][m] is a answer,
in the last position, we see a not equal t, we do min(t+s, (s+a+a)+t)
*/
var minimumDeleteSum = function(s1, s2) {
    let len1=s1.length, len2=s2.length;
    let dp = Array.from(Array(len2+1), () => new Array(len1+1));
    dp[0][0]=0;
    for(let i=1;i<=len1;i++){
        dp[0][i]=dp[0][i-1]+s1.charCodeAt(i-1);
    }
     for(let j=1;j<=len2;j++){
        dp[j][0]=dp[j-1][0]+s2.charCodeAt(j-1);
    }
    
    for(let i=1;i<=len2;i++){
        for(let j=1;j<=len1;j++){
            dp[i][j]= s1.charAt(j-1)==s2.charAt(i-1) ?
                dp[i-1][j-1] :
                Math.min(dp[i-1][j]+s2.charCodeAt(i-1),
                         dp[i][j-1]+s1.charCodeAt(j-1));
        }
    }
    console.log(dp)
    return dp[len2][len1];
};
