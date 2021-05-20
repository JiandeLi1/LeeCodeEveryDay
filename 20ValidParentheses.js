/**
 * @param {string} s
 * @return {boolean}
 */
/*
Time complexity: O(n),
Space complexity: O(n).
We use stack to record every ([{ in s, if we find )]}, we banlance corresponding 
sign, if we find a )]} donen't has corresponding sgin to banlance, return false,
final, if we still has element in stack, that mens still has element anot banlance, 
also return false.
*/

var isValid = function(s) {
    let stack=[];
    let len=s.length;
    for(let i=0;i<len;i++){
        if(s.charAt(i)=='('||s.charAt(i)=='['||s.charAt(i)=='{'){
            stack.push(s.charAt(i));
        }else{
            if(!stack.length) return false;
            let temp=stack.pop();
            if(s.charAt(i)==')' && temp!='(') return false;
            if(s.charAt(i)==']' && temp!='[') return false;
            if(s.charAt(i)=='}' && temp!='{') return false;
        }
    }
    return stack.length==0 ? true : false;
};