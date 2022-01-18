/**
 * @param {string} s
 * @return {number}
 */

//O(n^2)
var lengthOfLongestSubstring = function(s) {
    let temp=0
    let str=''
    let r=0
    for(let i=0;i<s.length;i++){
        if(!str.includes(s[i])){
            str+=s[i]
            temp++
        }else{
            if (str.length>1){
                const lastIndex=str.lastIndexOf(s[i])//O(n)
                 temp=str.length - lastIndex
                 str= str.substr(lastIndex+1, str.length-lastIndex-1)+s[i] //O(1)
               
            }else{
                str=s[i]
                temp=1
            }
            
        }
        (temp > r) && (r = temp);
    }
    return r
};

