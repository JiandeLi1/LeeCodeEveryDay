/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let res=0
    const col=grid[0].length
    const row=grid.length
    
    
    const backTracking= (r,c,sum) =>{
        if(
           r>=row || r < 0 || 
           c>=col || c <0  
          ){
            return sum
        }else if(grid[r][c]!=0){
            let temp=grid[r][c]
            grid[r][c]=0
            const up=backTracking(r+1,c,sum+temp)
            const right=backTracking(r,c+1,sum+temp)
            const down=backTracking(r-1,c,sum+temp)
            const left=backTracking(r,c-1,sum+temp)
            grid[r][c]=temp
            return Math.max(up,right,down,left)
        }else{
            return sum
        }
        
        
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
           if(grid[i][j]!=0) res=Math.max(res,backTracking(i, j, 0))
        }
    }

    return res
};