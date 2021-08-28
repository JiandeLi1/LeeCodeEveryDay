/**
 * @param {string} s
 * @return {string[]}
 */

/*
Time complexity: O(2^n)
Space Complexity: O(n)
*/
var letterCasePermutation = function(s) {
    let res=[]
    
    const len= s.length
    const backTracking = (start,keeper) =>{
        if(keeper.length===len){
           res.push(keeper)
            return
        }
            if(s[start]==='0' || s[start]*1){
                backTracking(start+1,keeper+s[start])
            }else{
                backTracking(start+1,keeper+s[start].toLowerCase())
                backTracking(start+1,keeper+s[start].toUpperCase())
            }
        
    }
    backTracking(0,'')
    return res
    
};