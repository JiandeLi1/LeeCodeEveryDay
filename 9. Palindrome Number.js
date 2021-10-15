/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    if(x<10) return true
    let r = 0
    for(let i = x; i >= 1; i = Math.floor(i/10)){
        r = r*10 + i%10
    }
    return r === x
   
};