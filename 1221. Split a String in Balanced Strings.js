/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res=0;
    let r=0,l=0
    for(let i=0;i<s.length;i++){
        s.charAt(i) ==='R'? r+=1 : l+=1;
        if(r===l){
            res+=1
            r=0
            l=0
        }
    }
    return res
};