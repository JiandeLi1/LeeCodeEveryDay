/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //Sortting the intervals by each element's first element to 
    //reduce the situations， now we have [a1,b1],[a2,b2]
    // situations, (a1<a2,b1<b2), (a1<a2,b1>b2), (a1>a2,b1<b2),
    //(a1>a2,b1>b2), (a1=a2,b1=b2), (a1=a2,b1<b2), (a1=a2,b1>b2),
    intervals.sort((a, b) => a[0] - b[0]);
    
    //Initializing the result to save all elements need to return,
    //Pushing the first element of intervals to the result first to start
    //compare the withe rest of element in intervals
    let i=1;
    let result=[intervals[0]];
    
    //Bacuse we did sorted the intervals, we only need to compare each
    //element second element.
    //If a[1] < b[1], that means a may be in the interval b,
    //if a[1] >= b[1], that means b totally in side interval a,
    //doesn't need to do any action.
    //To define a interweave in b, we also need to compare is a[1] less than b[0],
    //if yes, a's second element become b's second element.
    //Otherwise, a in not interweave the b interval, push b to result.
    while(i<intervals.length){
        let len=result.length-1;
        if(result[len][1]<intervals[i][1]){
            if(result[len][1]>=intervals[i][0]){
                result[len][1]=intervals[i][1]
               }else{
                result.push(intervals[i]);
            }
        }
            i+=1;
        }
    return result;
};