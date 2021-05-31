/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let n=grid[0].length, m=grid.length;
    for(let i=1;i<n;i++){
        grid[0][i]=grid[0][i-1]+grid[0][i];
    }
    for(let j=1;j<m;j++){
        grid[j][0]=grid[j-1][0]+grid[j][0];
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            grid[i][j]= Math.min(grid[i-1][j],grid[i][j-1])+grid[i][j]
        }
    }
    return grid[m-1][n-1]
};