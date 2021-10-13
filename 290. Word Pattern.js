/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    if(pattern.length===1 && s.length===1 && pattern===s) return true
    if(pattern.length===s.length) return false
    let pMap=new Map()
    let str=s.split(' ')
    if(str.length!=pattern.length) return false
    for(let i=0;i<pattern.length;i++){
        if(pMap.has(pattern[i])){
            if(pMap.get(pattern[i])!=str[i]){
                 return false
               }
        }else{
            pMap.set(pattern[i], str[i])
        }
    }
   
    let sMap=new Map()
    for(let i=0;i<str.length;i++){
        if(sMap.has(str[i])){
            if(sMap.get(str[i])!=pattern[i]){
                 return false
               }
        }else{
            sMap.set(str[i], pattern[i])
        }
    }
    return true
};