/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let res =[]
    
    const backTracking =(sum, d, curr) =>{
        if(d===n){
            res.push(sum)
            return 
        }
        
        if(curr+k<10){
            backTracking(sum*10+(curr+k),d+1,curr+k)
        }
        if(curr-k>=0 && k!=0){
            backTracking(sum*10+(curr-k),d+1,curr-k)
        }
        
    }
    
    for(let i=1;i<10;i++){
        backTracking(i,1,i)
    }
    return res
};