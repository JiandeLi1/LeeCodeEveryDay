/**
 * @param {string} s
 * @return {boolean}
 */

/*
 Time complexity: O(n);
 Space complexity: O(n);
 
 We push the index in the stacks, if index of s is '(', pushing to pStack.
 if index of s is '*', pushing to sStack,
 if index of s is ')', wu can pop the pStack, if pStcak is empty, pop the sStack,
 if both stacks is emtpy and still has ')' in s, than means s is not banlance,
 return false.
 After we finish pushing and poping in ths stacks, we still need to think about one 
 question, '*' can not banlance all '(', if a all '*' after '(' is not enough to 
 banlance '(', we still not banlance, for example ***((*.
 There are enough * to cancel the '(', but the position in not right, 
 we just need to use the index in both stacks, if the length of pStack is larger than 
 sStack, means not enought to banlance, return false.
 Otherwise, we can compare the pStack and sStack, if the sStack has enough '*' and 
 thses '*'s' index all are larger than all indexes in pStack, than renturn true. 
 
*/
var checkValidString = function(s) {
    let pStack=[];
    let sStack=[];
    let len=s.length;
    for(let i=0;i<len;i++){
        (s.charAt(i)=='*') && (sStack.push(i));
        (s.charAt(i)=='(') && (pStack.push(i));
        if (s.charAt(i)==')'){ 
            if(pStack.length){
                pStack.pop();
            }else if (sStack.length){
                sStack.pop();
            }else{
                return false
            }
        }
    }
    if(pStack.length>sStack.length) return false;
    let pLen=pStack.length;
    for(let j=0;j<pLen;j++){
        if(pStack.pop()>sStack.pop()){return false};
    }
    return true;
};




/*
Time complexity: O(n);
Space complexity: O(1);

Do a traverse, we record the number of '(', if index of s is '(', left++, otherwise
 left--. However, index of s may be '*', that can be a '(', so we need to do
  Math.max(left,0) to make sure than left is larger than 0. (left is recode the number
    of '(', if a '*' minus the '(', and make it less than 0, left become 0 again, 
    if ')' makes it less than 0, leftStar will check than '*' is enough cancel ')' or 
    not)
  If index of  is not ')', it may be '*' or '(', we do leftStart++, other wise, 
  leftStar--. If leftStar is less than 0, than means thaere is not banlance, 
  return false.
  
  At the last, if a '(' we recode is larger or less than 0, that means the ')' or 
  '*' after last '(' is not enough to cancel '('. If left==0, return true, othewise,
   return false.
*/

/*
var checkValidString = function(s) {
    let left=0, leftStar=0;
    for(let i =0;i<s.length;i++){
        s.charAt(i)=='(' ? left+=1 : left-=1;
        s.charAt(i)!=')' ? leftStar+=1 : leftStar-=1;
        if(leftStar<0) return false;
        left=Math.max(left,0);
    }
    return left==0;
};