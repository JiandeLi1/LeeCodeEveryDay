/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let r=0, l=s.length-1
    
    const isPalindrome=(i,j)=>{
        while(i<j){
            if(s[i]!==s[j]) return false
            i+=1;
            j-=1
        }
        return true
    }
    while(r<l){
        if(s[r]!==s[l]){
           return isPalindrome(r+1,l) || isPalindrome(r,l-1) 
        }
        r+=1
        l-=1
    }
    return true   
};