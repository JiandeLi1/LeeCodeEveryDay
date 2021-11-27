/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    for(let i=1;i<grid[0].length;i++){
        grid[0][i]=grid[0][i]+grid[0][i-1]
    }
    
    for(let i=1;i<grid.length;i++){
        grid[i][0]=grid[i][0]+grid[i-1][0]
    }
    
    for(let i=1;i<grid[0].length;i++){
        for(let j=1;j<grid.length;j++){
            grid[j][i]= grid[j][i]+Math.min(grid[j-1][i], grid[j][i-1])
        }
    }
    return grid[grid.length-1][grid[0].length-1]
};