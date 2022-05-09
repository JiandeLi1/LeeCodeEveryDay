/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//BFS
// var solve = function(board) {
//   const r= board.length
//   const c= board[0].length
  
//   const bfs = (x,y) => {
//       if(board[x][y]!=='O') return 
//       let q=[[x,y]]
//       while(q.length){
//           let [row, col] = q.shift()
//           if(board[row][col]==='O'){
//              board[row][col]='Q'
//              if(row+1<r) q.push([row+1, col])
//              if(row-1>=0) q.push([row-1, col])
//              if(col+1<c) q.push([row, col+1])
//              if(col-1>=0) q.push([row, col-1])
//           }
//       }
      
//   }
  
//   for(let i=0;i<r;i++){
//       bfs(i,0)
//       bfs(i,c-1)
//   }
    
//   for(let i=0;i<c;i++){
//       bfs(0,i)
//       bfs(r-1,i)
//   }
  
//   for(let i=0;i<r;i++){
//       for(let j=0;j<c;j++){
//           if(board[i][j]==='Q'){
//               board[i][j]='O'
//           }else if (board[i][j]==='O'){
//               board[i][j]='X'
//           }
//       }
//   }
 
// };


//DFS
var solve = function(board) {
  const r= board.length
  const c= board[0].length
  
  const bfs = (x,y) => {
      if(x<0 || x>=r || y<0 || y>=c || board[x][y]!=='O') return 
      board[x][y]='Q'
      bfs(x+1,y)
      bfs(x-1,y)
      bfs(x,y+1)
      bfs(x,y-1)
  }
  
  for(let i=0;i<r;i++){
      bfs(i,0)
      bfs(i,c-1)
  }
    
  for(let i=0;i<c;i++){
      bfs(0,i)
      bfs(r-1,i)
  }
  
  for(let i=0;i<r;i++){
      for(let j=0;j<c;j++){
          if(board[i][j]==='Q'){
              board[i][j]='O'
          }else if (board[i][j]==='O'){
              board[i][j]='X'
          }
      }
  }
 
};