/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n===0) return 0
    let list=[0,1,1]
    
    for(let i=3;i<=n;i++){
        list.push(list[i-3]+list[i-2]+list[i-1]);
    }
    return list[n]
};