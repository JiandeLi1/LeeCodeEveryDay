/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if(s.length<10) return []
    let word=''
    let keep=new Set()
    let res=new Set()
    for(let i=0;i<10;i++){
        word+=s[i]
    }
    keep.add(word)
    for(let i=0;i<s.length-10;i++){
        word=word.substring(1)+s.charAt(i+10)
        if(keep.has(word)){
            if(!res.has(word)){
                res.add(word)
            }
        }else{
            keep.add(word)
        }
    }
    return Array.from(res)  
};