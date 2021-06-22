/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack=['*']
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)=='('){
            stack.push("(")
        }else{
            if(stack[stack.length-1]=="("){
                stack.splice(stack.length-1,1)
            }else{
                stack.push(')')
            }
        }
    }
    
    return stack.length-1
};