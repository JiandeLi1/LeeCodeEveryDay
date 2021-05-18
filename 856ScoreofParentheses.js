/**
 * @param {string} s
 * @return {number}
 */

/*
Time complexity=O(n), space complexity=O(1)
We know that a ()=1, if a () in side n parentheses = 2^n,
so we can count the ( before the (), the score = (2 ^ count of '('),
Also, when we get one score, need to reduce ')', because there may has a new start,
we need to make the count of '(' to be 0. (We know that '('s = ')'s, so when charAt(i)
==')', the count of '(' minus 1 can be fine.)
*/
var scoreOfParentheses = function(s) {
    let len=s.length-1;
    let result=0;
    let level=0;
    for(let i=0;i<len;i++){
       s.charAt(i)=='(' ? level+=1 : level-=1;
      (s.charAt(i)=='(' && s.charAt(i+1)==')') &&
          (result+=Math.pow(2,level-1));
    }
    return result
};



/*
Time complexity=O(n^2), space complexity=O(n)
We count the '(', and minus the count when charAt(i)==')',
If we find the count==0 and i not equal length of s, that means the s have more than
one part, do scoreOfParentheses(s,l,i) + scoreOfParentheses(s,i+1,r);

If a the count==0 and i is = the length-1 of s, we reduce a () in the most outside,
and do scoreOfParentheses(s,l+1,r-1), just double the result of
scoreOfParentheses(s,l+1,r-1)
*/
// var scoreOfParentheses = function(s ,l=0,r=s.length-1) {
//     if(r-l==1) return 1;
//     let digit=0;
//     for(let i=l;i<r;i++){
//         (s.charAt(i)=='(') && (digit+=1);
//         (s.charAt(i)==')') && (digit-=1);
//         if(digit==0){
//             return scoreOfParentheses(s,l,i) + scoreOfParentheses(s,i+1,r)
//         }
//     }
    
//     return 2*scoreOfParentheses(s,l+1,r-1);
// };