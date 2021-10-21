/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dir =[[1,0],[0,1],[-1,0],[0,-1]]
    let count=0
    let queue=[]
    const bfs=(q)=>{
        while(q.length){
            let l=q.pop()
                grid[l[0]][l[1]]='0'
                for(let d of dir){
                    if(l[0]+d[0]>=0 && l[0]+d[0]<grid.length &&
                       l[1]+d[1]>=0 && l[1]+d[1]<grid[0].length &&
                       grid[l[0]+d[0]][l[1]+d[1]]==='1'
                      ){
                        q.push([l[0]+d[0],l[1]+d[1]])
                    }
                }
            }
        }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==='1'){
                count+=1
                queue.push([i,j])
                bfs(queue)
            }
        }
    }
    return count
};