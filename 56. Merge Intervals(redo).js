var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let res=[]
    let start=intervals[0][0]
    let end=intervals[0][1]
    for(let i=1;i<intervals.length;i++){
        const temp=end
        if(intervals[i][1]>end) end=intervals[i][1]
        if(intervals[i][0]>temp){
            res.push([start, temp])
            start=intervals[i][0]
        }
    }
    res.push([start,end])
    return res
};