/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let res=0
    let queens = []
    for(let i=0;i<n;i++){
        queens.push([])
         for(let j=0;j<n;j++){
             queens[i].push(false)
         }
    }
    const isValid = (r,c) => {
        for(let i=0;i<r;i++){
            if(queens[i][c]) return false
        }
        
        for(let i=r-1, j=c-1; i>=0 && j>=0; i--, j--){
            if(queens[i][j]) return false
        }
        
        for(let i=r-1, j=c+1; i>=0 && j<n; i--, j++){
            if(queens[i][j]) return false
        }
        return true
    }
    const helper =(row)=>{
        if(row===n){
            res+=1
            return
        }
        for(let i = 0; i<n;i++){
            if(isValid(row,i)){
                queens[row][i]=true
                helper(row+1)
                queens[row][i]=false
            }
        }
    }
    helper(0)
    return res
};