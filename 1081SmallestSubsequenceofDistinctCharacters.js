/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    /*
    TC: O(n)
    SC: O(n)
    */
    let stack=[]
    const len=s.length
    for(let i=0;i<len;i++){
        const char=s.charAt(i)
         if (stack.includes(char)) continue
        while(stack.length &&
              stack[stack.length-1] > char &&
              s.indexOf(stack[stack.length-1],i) > i
              ){
              stack.pop()
              }
        stack.push(char)
    }
    return stack.join('')
};

 