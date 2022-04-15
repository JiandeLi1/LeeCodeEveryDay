/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if (bloomDay.length<(m*k)) return -1
    
    const checkDay=(d)=>{
        let bouquets=0
        let flower=0
        for(let i=0;i<bloomDay.length && bouquets < m;i++){
            if(bloomDay[i]<=d){
               flower+=1
               if(flower===k){
                   flower=0
                   bouquets+=1
               }
            }else{
                flower=0
            }
        }
        return bouquets >= m
    }
    
    let l=Math.min.apply(null,bloomDay)
    let r=Math.max.apply(null, bloomDay)
    
    while(l<=r){
         const day = Math.floor((l+r)/2)
         if(checkDay(day)){
             r=day-1
            }else{
             l=day+1
         }
    }
    return l
};