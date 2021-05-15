/**
 * @param {character[][]} grid
 * @return {number}
 */


var numIslands = function(grid) {
   if(!grid){return 0;};
    let count =0;
    let gridLen=grid.length;
    let itemLen=grid[0].length;
  const dfs=(grid, i, j)=> {
  if (grid[i][j] === '0') {
    return;
  } else {
    grid[i][j] = '0';
    if (i - 1 >= 0) {
      dfs(grid, i - 1, j);
    }
    if (j + 1 < itemLen) {
      dfs(grid, i, j + 1);
    }
    if (i + 1 < gridLen) {
      dfs(grid, i + 1, j);
    }
    if (j - 1 >= 0) {
      dfs(grid, i, j - 1);
    }
  }
}
    grid.forEach((item,index1)=>{
        item.forEach((element, index2)=>{
            if(grid[index1][index2]=='1'){
                count+=1;
                dfs(grid, index1,index2);
            }
        })
    })
       
                 
    return count;
    
};