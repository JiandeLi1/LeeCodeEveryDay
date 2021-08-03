/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    let s=''
    while(a>0 || b>0){
        let A=false
        const len= s.length
        if(len>=2 && s[len-2]==s[len-1]){
           (s[len-1]=='b') && (A=true);
         }else{
            (a>=b) && (A=true);
         }
        if(A){
            s+='a'
            a-=1
        }else{
            s+='b'
            b-=1
        }

    }
    return s
};