/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
   let inDegree = new Array(numCourses).fill(0)
   let count=0;
   let queue=[]
    for(let [course, pre] of prerequisites){
        inDegree[course]+=1
    }
    for(let i=0;i<numCourses;i++){
        if(inDegree[i]===0){
            queue.push(i)
        }
    }
    while(queue.length){
        let course = queue.shift()
        count+=1
        
        for(let [c,p] of prerequisites){
            if(p===course){
                inDegree[c]-=1
                if(inDegree[c]===0){
                    queue.push(c)
                }
            }
        }
    }
    return count===numCourses
 };
