/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let len1=s1.length+1;
    let len2=s2.length+1;
    if(len1+len2-2!=s3.length) return false;
    let arr=Array.from(Array(len2), () => new Array(len1));
    arr[0][0]=true;
    for(let i =1;i<len1;i++){
        arr[0][i]=(s1.charAt(i-1)==s3.charAt(i-1)&&
                  arr[0][i-1]);
    }
    for(let j =1;j<len2;j++){
        arr[j][0]=(s2.charAt(j-1)==s3.charAt(j-1)&&
                   arr[j-1][0]);
    }
    for(let k=1;k<len2;k++){
        for(let l=1;l<len1;l++){
            arr[k][l]=((s1.charAt(l-1)==s3.charAt(k+l-1) && arr[k][l-1]) ||
                       (s2.charAt(k-1)==s3.charAt(k+l-1) && arr[k-1][l]))
        }
    }
    return arr[arr.length-1][arr[0].length-1];
   
};
