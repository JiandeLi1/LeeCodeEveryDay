/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let map=Array(128).fill(0)
    let b=0//begin
    let r=0//result
    for(let i=0;i<s.length;i++){
        map[s.charCodeAt(i)]++//each step char ++
        if(map[s.charCodeAt(i)]===1){
            if(r<i-b+1){
                r=i-b+1  
             }
        }else{
            let tmp=b
            for(let j=b;j<i;j++){
                if(s.charCodeAt(j)===s.charCodeAt(i)){
                    b=j+1
                }
            }
            for(let j=tmp;j<b;j++){
                if(s.charCodeAt(j)!==s.charCodeAt(i)){
                   map[s.charCodeAt(j)]=0
                }
            }
        }
    }
    return r
};
