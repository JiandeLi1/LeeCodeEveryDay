/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var findOrder = function(numCourses, prerequisites) {
    let graph = new Map()
    let visited = new Array(numCourses).fill(0)
    let res =[]
    for(let [v, e] of prerequisites){
        if(graph.has(v)){
            graph.set(v,[...graph.get(v), e])
        } else {
            graph.set(v, [e])
        }
    }
   function DFS(index){
       visited[index]=1
       if(graph.get(index)){
           for(let c of graph.get(index)){
               if(visited[c]===1) return true
               if(visited[c]===0 && DFS(c)) return true
           }
       }
       visited[index]=-1
       res.push(index)
       return false
    }
    for(let i = 0; i < numCourses; i++){
        if(visited[i] === 0 && DFS(i)) return [];
    }
    return res;
}