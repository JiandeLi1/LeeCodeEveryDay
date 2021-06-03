/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    let l=index,r=index, rest=maxSum-n, res=1
    while(l>0||r<n-1){
        let layer=r-l+1
        if(layer<=rest){
            rest-=layer
            res+=1
            l = Math.max(0, l - 1)
            r = Math.min(n - 1, r + 1)
        }else{
            break
        }
    }
    res+=Math.floor(rest/n)
    return res
};