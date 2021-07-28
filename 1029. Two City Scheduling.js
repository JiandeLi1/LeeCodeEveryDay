/**
 * @param {number[][]} costs
 * @return {number}
 */
/*
time complexity: O(n)+O(nlongn)
space complexity: O(1)
Strategy: Sorting array by increse by costs[i][0]-costs[i][1],
if costs[i][0]-costs[i][1] smaller it is, means a is cheaper than b more,
take first n element a's price, rest take b 
*/
var twoCitySchedCost = function(costs) {
    let res=0  
    costs.sort((a,b)=>(a[0]-a[1])-(b[0]-b[1]))
    const halfLen=costs.length/2
    for(let i =0;i<halfLen;i++){
        res+=costs[i][0]
    }
    for(let i =0;i<halfLen;i++){
        res+=costs[i+halfLen][1]
    }
    return res
};