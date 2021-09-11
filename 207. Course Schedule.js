/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
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
       if(visited.has(node) || !graph.get(node)) return true
       visiting.add(node)
       for(let i=0;i<graph.get(node).length;i++){
           if(visiting.has(graph.get(node)[i])) return false
           if(!dfs(graph.get(node)[i])) return false
       }
       visiting.delete(node)
       visited.add(node)
       return true
    }
    
    return prerequisites.reduce((a,b)=>
            a && dfs(b[0]), true)
    
    };

