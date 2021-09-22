
//In thie question, if we need to use DFS, we need to know is ring inside or not.
//For explame, [[0,1],[1,2],[2,0]], we need to take 0 to take 2, need 2 for 1, but 
//also need 1 for 0. If you dont take 2, how to take 0. This is alsolute wrong.
//How to use DFS idea for it?
//For a road, we can start at the first node, check the node has ring with any later 
//node or not. To impilment it, we need to has a visiting set, if any visiting node
//has ring, false.
var canFinish = function(numCourses, prerequisites) {
    let graph=new Map();
    let visited=new Set();
    let visiting=new Set();
    prerequisites.forEach(item=>{
        graph.get(item[0]) ? 
        graph.set(item[0], [...graph.get(item[0]), item[1]]) :
        graph.set(item[0], [item[1]])
    })
    const dfs=(node)=>{
       if(visited.has(node) || !graph.has(node)) return true
       visiting.add(node)
       for(let i=0; i<graph.get(node).length;i++){
           if(visiting.has(graph.get(node)[i])) return false
           if(!dfs(graph.get(node)[i])) return false
       }
      visiting.delete(node) 
      visited.add(node)
      return true
    }
    return prerequisites.reduce((a,b)=>a&&dfs(b[0]),true)
    };


//Each node if no pre course, can be a start, and find each course's percoruse
//is start, if the coruse all percourse are start, it will be a start.
//Finally , if all course can be start, it is good


var canFinish = function(numCourses, prerequisites) {
    let graph=new Array(numCourses).fill(0)
    let queue=[]
    let count=0
    for(let [c,p] of prerequisites){
        graph[c]++
    }
    for(let i=0;i<numCourses;i++){
        if(graph[i]===0) queue.push(i)
    }
    
    while(queue.length){
        const node=queue.shift()
        count++
        for(let [c,p] of prerequisites){
            if(p===node){
                graph[c]--
                if(graph[c]===0) queue.push(c)
            }
        }
    }
    
    return count===numCourses
};
