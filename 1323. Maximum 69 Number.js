/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let n = num.toString()
    for(let i=0;i<n.length;i++){
        if(n[i]=='6'){
            n=n.substring(0,i)+'9'+n.substring(i+1)
            break
        }
    }
    return Number(n)
};