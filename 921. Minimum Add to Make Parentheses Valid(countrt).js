/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {

    
//Using two counter
//Time conmplexity: O(n)
//Space complexity: O(1)
    let bal=0;
    let ans=0;
    for(let i=0;i<s.length;i++){
        bal+= s[i]===')' ? -1 : 1
        if(bal===-1){
            bal=0
            ans+=1
        }
    }
    return bal+ans
}