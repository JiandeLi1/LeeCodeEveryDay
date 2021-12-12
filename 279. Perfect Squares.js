/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const f = new Array(n+1).fill(0);
    for(let i =1; i<=n;i++){
        let m = Number.MAX_VALUE
        for(let j=1; j*j<=i; j++){
           m = Math.min(m,f[i-j*j])
        }
        f[i]=m+1
    }
    return f[n];
};

//++++++++++++++++++++
//i=1
//j=1, j*j=1*1<=i=1, f[1]=f[0]+1=1
//++++++++++++++++++++++
//i=2
//j=1, j*j=1*1<=i=2, f[2]=f[1]+1=2 (1,1)
//++++++++++++++++++++++
//i=3
//j=1, j*j=1*1<=i=3, f[3]=f[2]+1=3 (1,1,1)
//++++++++++++++++++++++
//i=4
//j=1, j*j=1*1<=i=4, f[4]=f[3]+1=4
//j=2, j*j=2*2<=i=4, f[4]=f[0]+1=1 (4)
//i=5
//j=1, j*j=1*1<=i=5, f[5]=f[4]+1=2= f[4]+f[1]=2
//j=2, j*j=2*2<=i=5, f[1]+1=2 = f[4]+1=1, f[5] = 2
//...
//...
//i=9
//j=1, j*j=1*1<=i=9, f[9]=f[8]+1
//j=2, j*j=2*2<=i=9, f[5]+1=2
