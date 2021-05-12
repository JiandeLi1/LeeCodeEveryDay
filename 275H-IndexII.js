/**
 * @param {number[]} citations
 * @return {number}
 */

var hIndex = function(citations) {
    let left=0,right=citations.length-1,len=citations.length,mid=0;
    if(len==1){return citations[0]==0 ? 0 : 1};
    while(left<right){
        mid=Math.floor((left+right)/2);
        ((len-mid)>citations[mid]) && (left=mid+1);
        ((len-mid)<=citations[mid]) && (right=mid);
    }
    return (citations[left]!=0) ? len-left : 0;
};