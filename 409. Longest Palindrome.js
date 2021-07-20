/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let m= new Map()
    let sum=0
    let odds=0
    for(let i=0;i<s.length;i++){
        m.set(s.charAt(i), m.get(s.charAt(i)) ?  m.get(s.charAt(i))+1 : 1)
    }

    m.forEach((value,key)=>{
        if(value%2==1){
            odds+=1
        }
    })
    
    return odds ? s.length+1-odds : s.length
};