/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length===0) return 0
    points.sort((a,b)=>a[0]-b[0])
    let shoot=0;
    let end = points[0][1]
    for(let i=1;i<points.length;i++){
        //if curr.first less or equal then end, curr inside last point
        if(points[i][0]<=end){
            //if curr.second less than end,  the end need to reduce
            //|_____lastEnd______|(last end)
            //    |__newEnd___|(end)
            if(end>points[i][1]){
               end = points[i][1]
            }
        }else{
            shoot+=1
            end = points[i][1]
        }
    }
    return shoot+1
};