/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack=[]
    const len= num.length
    for(let i=0;i<len;i++){
        while(stack.length && stack[stack.length-1] > num.charAt(i) && k){
            stack.pop()
            k-=1
        }
        stack.push(num.charAt(i)) 
    }
    while(k>0){
        stack.pop()
        k-=1
    }
    while(stack.length && stack[0]=='0'){
        stack.shift()
    }
    return  stack.length ? stack.join("") : "0"
};