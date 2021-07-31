/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    let res=n.toString().split("")
    for(let i=res.length-2;i>=0;i--){
        res[i]=res[i]*1
        res[i+1]=res[i+1]*1
        
        if(res[i]>res[i+1]){
            res[i]=res[i]-1
            res[i+1]=9
            let j=i+2
            while(j<res.length && res[j]!=9){
                  res[j]=9
                  j+=1
            }
        }
    }
    return res.join('')
};