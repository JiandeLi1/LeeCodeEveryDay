var intersectionSizeTwo = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[1]!=b[1]){
            return a[1]-b[1]
        }else{
            return b[0]-a[0]
        }
    })
    let a=intervals[0][1]-1
    let b=intervals[0][1]
    let count=2
    
    for(let i=0;i<intervals.length;i++){
        if(intervals[i][0]<=a){
            continue
        }else if(intervals[i][0]<=b){
            a=b
            b=intervals[i][1]
            count++
        }else{
            count+=2
            a=intervals[i][1]-1
            b=intervals[i][1]
        }
    }
    return count
};