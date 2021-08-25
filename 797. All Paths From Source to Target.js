/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/*
time complexity: O(2*n*n)
space complexity: O(n)
*/
var allPathsSourceTarget = function(graph) {
    let res = []
    const len= graph.length-1
    
    const backTracking = (keeper, node) => {
        if(node===len){
            res.push([...keeper])
            return
        }
        for(let i=0;i<graph[node].length;i++){
            keeper.push(graph[node][i])
            backTracking(keeper,graph[node][i])
            keeper.pop()
        }
    }
    backTracking([0],0)
    return res
};