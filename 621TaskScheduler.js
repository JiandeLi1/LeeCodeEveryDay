/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if(n==0) return tasks.length
    let queue=new Array(26).fill(0)
    for( let t of tasks){
        queue[t.charCodeAt()-'A'.charCodeAt()]+=1
    }
    let p=1
    queue.sort((a,b)=>b-a)
    while(p<queue.length && queue[p]==queue[0]) p+=1
    return Math.max(tasks.length, (queue[0]-1)*(n+1)+p)
};