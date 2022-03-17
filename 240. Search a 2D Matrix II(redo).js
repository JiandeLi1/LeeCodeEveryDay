/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
   let row = 0
   let rows = matrix.length-1
   let col = matrix[0].length-1
    
   while(col>=0 && row<=rows){
        if(matrix[row][col]===target) return true
        matrix[row][col]>target ? col-- : row++;
   }
   
   return false
   
};