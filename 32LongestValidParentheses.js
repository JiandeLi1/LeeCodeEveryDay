/**
 * @param {string} s
 * @return {number}
 */
/*
Time complexity:O(n);
Space complexity: O(n);
Using stack, the 0 index of stack is -1,
if a the index of s is  ), pop the stack, if stack still has element,
means we has ( and using i-pop, to get how long it is (this is why push -1 in first,
  if () , we get 1--1=2).
We stack doesn't has any thing, push the index to stack to record the index,
else, stack still has ( or just finish (, Max the new long and old long to get the
 longest.
*/
var longestValidParentheses = function(s) {
    let stack=[-1];
    let res=0;
    let len=s.length;
    for(let i=0;i<len;i++){
        (s.charAt(i)=='(') && (stack.push(i));
        if(s.charAt(i)==')'){
           stack.pop();
           !stack.length ? stack.push(i) : res=Math.max(res, i-stack[stack.length-1]);
           }
        }
    return res;
};