var setZeroes = function(matrix) {
    let row = 0
    let col = 0
    const n = matrix.length
    const m = matrix[0].length
    for(let i =0; i<n; i++){
        for(let j= 0; j < m ; j++){
            if(matrix[i][j]===0){
                matrix[0][j]=0
                matrix[i][0]=0
                if(i===0) row=1
                if(j===0) col=1
            }
        }
    }
    for(let i = 1; i<m; i++){
        if(matrix[0][i]===0){
            for(let j = 1 ;j<n;j++){
                matrix[j][i]=0
            }
        }
    }
    for(let i = 1; i<n; i++){
        if(matrix[i][0]===0){
            for(let j = 1 ;j<m;j++){
                matrix[i][j]=0
            }
        }
    }
    if(row){
        for(let i = 0; i<m;i++) matrix[0][i]=0
    }
    if(col){
        for(let i = 0; i<n;i++) matrix[i][0]=0
    }
};