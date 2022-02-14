/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count =0
    const bfs = (i,j) => {
        if(grid[i][j]==='1'){
            grid[i][j]='0'
            if(i>0){
               bfs(i-1,j)
            }
            if(i<grid.length-1){
               bfs(i+1,j)
            }
            if(j>0){
               bfs(i,j-1)
            }
            if(j<grid[0].length-1){
               bfs(i,j+1)
            }
        }else{
            return 
        }
    }
    
    grid.forEach((row, idx1)=>{
        row.forEach((item,idx2)=>{
            if(grid[idx1][idx2]==='1'){
                count+=1
                bfs(idx1,idx2)
            }
        })
    })
    
    return count
};