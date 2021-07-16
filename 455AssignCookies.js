/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let count=0,i=0,j=0
    while(g[j] && s[i]){
        if(s[i]>=g[j]){
            count+=1
            j+=1
        }
        i+=1
    }
    return count
};