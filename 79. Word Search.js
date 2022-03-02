/*
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
//     let record=Array(board.length).fill(null).map(() => Array(4).fill(false))
//     let m= new Map()
//     const bfs=(idx,i,j,curr)=>{
//         if(i<0||i>=board.length||j<0||j>=board[0].length) return false
//         if(idx===word.length-1 && board[i][j]===word[word.length-1]) return true
//         if(idx===0 && record[i][j]===true) return false
//         if(m.get(i)&&m.get(i).includes(j)) return false
//         if(idx===0) record[i][j]=true
//         m.set(i, m.get(i) ? [...m.get(i), j]:[j])
//         if(board[i][j]===word[idx]){
//             return bfs(idx+1,i+1,j,curr+board[i][j]) ||
//                    bfs(idx+1,i,j+1,curr+board[i][j]) ||
//                    bfs(idx+1,i-1,j,curr+board[i][j]) ||
//                    bfs(idx+1,i,j-1,curr+board[i][j])
//         }else{
//             m=new Map()
//             return bfs(0,i+1,j,"") ||
//                    bfs(0,i,j+1,"") ||
//                    bfs(0,i-1,j,"") ||
//                    bfs(0,i,j-1,"")
//         }
//      }
    
//     return bfs(0,0,0,"")
    
    
    const bfs=(idx,i,j)=>{
        if(i<0||i>=board.length||
           j<0||j>=board[0].length||
           board[i][j]!== word[idx]) return false
        
        if(idx===word.length-1) return true
        let temp=board[i][j]
        board[i][j]=''
        let res = bfs(idx+1,i+1,j) ||
                  bfs(idx+1,i,j+1) ||
                  bfs(idx+1,i-1,j) ||                                                                         bfs(idx+1,i,j-1)
        board[i][j]=temp
        return res
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(bfs(0,i,j)) return true
        }
    }
    
    return false
};