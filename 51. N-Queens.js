/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res=[];
    let queens= new Array(n).fill(".".repeat(n))
    const helper = (curRow) => {
        if(curRow===n){
            res.push([...queens])
            return
        }
        
        for(let i=0;i<n;i++){
            if(isValid(curRow,i)){
               queens[curRow]='.'.repeat(i)+'Q'+'.'.repeat(n-i-1)
               helper(curRow+1)
               queens[curRow] = ".".repeat(n)
             }
        }
    }
    
    const isValid = (row,col) => {
        for (let i = 0; i < row; ++i) {
            if (queens[i][col] == 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
            if (queens[i][j] == 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
            if (queens[i][j] == 'Q') return false;
        }
        return true;
    }
    
    helper(0)
    return res
};