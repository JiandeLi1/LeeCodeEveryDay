/**
 * @param {string} s
 * @return {string}
 */
/*
time complexity: O(n)
space complexity: O(n)
*/
var decodeString = function(s) {
    let stack=[]
    const len=s.length
    for(let i=0;i<len;i++){
        if(s.charAt(i)!==']'){
            stack.push(s.charAt(i))
        }else{
         let str=''
         let cur=stack.pop()
         while(cur!=='['){
             str=cur+str
             cur=stack.pop()
         }
         let num=''
         cur=stack.pop()
         while(!Number.isNaN(cur*1)){
             num=cur+num
             stack.length ? cur=stack.pop() : cur='-'
            
         }
         (cur!='-') && (stack.push(cur))
         stack.push(str.repeat(num*1));
         }
    }
    return stack.join("")
};