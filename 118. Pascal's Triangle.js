/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res=[]
    for(let i=1;i<=numRows;i++){
        let level=new Array(i).fill(1)
        for(let j=1; j<=i-2;j++){
            level[j]=res[res.length-1][j-1]+res[res.length-1][j];
        }
        res.push(level)
    }
    return res
};