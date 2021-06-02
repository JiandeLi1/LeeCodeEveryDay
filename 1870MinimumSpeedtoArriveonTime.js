/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let l=0, r=Math.pow(10, 7), len=dist.length
    if(hour<=len-1) return -1
    while(l<r){
        let m=Math.floor((l+r)/2)
        let ans=0;
        for(let i=0;i<len-1;i++){
            ans=ans+Math.ceil(dist[i]/m)
        }
        ans+=dist[len-1]/m
        if(ans==hour){
            return m
        }
        if(hour>ans){
            r=m
        }else{
            l=m+1
        }
    }
    return l;
};