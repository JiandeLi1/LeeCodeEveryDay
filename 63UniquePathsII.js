var uniquePathsWithObstacles = function(obstacleGrid) {
    let rStop=0, dStop=0, n=obstacleGrid[0].length, m=obstacleGrid.length
    if(obstacleGrid[m-1][n-1]==1||obstacleGrid[0][0]==1) return 0
   for(let i=0;i<n;i++){
       if(obstacleGrid[0][i]==1){
           obstacleGrid[0][i]=0
           rStop=i
           break
       }else{
       obstacleGrid[0][i]=1
       }
   }
    for(let j=1;j<m;j++){
       if(obstacleGrid[j][0]==1){
           obstacleGrid[j][0]=0
           dStop=j
           break
       }else{
       obstacleGrid[j][0]=1
       }
   }
    if(rStop>0){
        for(let i=rStop;i<n;i++){
           obstacleGrid[0][i]=0
        }
    }
    if(dStop>0){
        for(let i=dStop;i<m;i++){
            obstacleGrid[i][0]=0
        }
    }
  for(let i=1;i<m;i++){
      for(let j=1;j<n;j++){
          if(obstacleGrid[i][j]==0){
          obstacleGrid[i][j]=obstacleGrid[i-1][j]+obstacleGrid[i][j-1]
          }else{
              obstacleGrid[i][j]=0
          }
      }
  }
  return obstacleGrid[m-1][n-1]
};