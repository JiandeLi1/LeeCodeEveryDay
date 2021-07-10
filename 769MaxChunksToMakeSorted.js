/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let res=0
    let m=0
    const len=arr.length
    for(let i=0;i<len;i++){
         m=Math.max(m,arr[i])
        (m == i) && (res+=1)
    }
    return res
};