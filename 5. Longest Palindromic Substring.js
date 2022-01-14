/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ''
    const palindrome=(l,r)=>{
        while(l>=0 && r<s.length && s[l]===s[r] ){
              l--
              r++
        }
        return s.substr(l + 1, r - l - 1)
    }
    for (let i = 0; i < s.length; i++) {
        let s1 = palindrome(i,i)
        let s2 = palindrome(i,i+1)
        res = res.length>s1.length ? res : s1
        res = res.length>s2.length ? res : s2    
    }
    return res
};