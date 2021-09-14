/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let inDegree =new Array(numCourses).fill(0)
    let queue=[]
    for(let [c,p] of prerequisites){
            inDegree[c]++;
    }
    let list=[]
    for(let i=0;i<numCourses;i++){
        if(inDegree[i]===0){
            queue.push(i)
            list.push(i)
        }
    }
    while(queue.length){
        let course=queue.shift()
        for(let [c,p] of prerequisites){
            if(course===p){
                inDegree[c]-=1
                if(inDegree[c]===0){
                    queue.push(c)
                    list.push(c)
                }
            }
        }
    }
    return list.length===numCourses ? list : []
};