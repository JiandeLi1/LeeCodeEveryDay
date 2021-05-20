/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let l=0;//The left that no pair yet
    let count=0;//Count number you need
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)=='('){
            l+=1
        }else{
          //If )) move to next step, if only one ) ,need a ), count+1.
          (s.charAt(i+1) && s.charAt(i+1)==')') ? i+=1 : count+=1;
         //If no left have to pair, +1 more to count, because need a (, count+1,
         //else, no matter what is i+1,if only one ), if there are two )), and 
         //no ( , need a (, count+1, if have (, banlance , left-1. If there is one ), 
         //no ( , need a ( [no need to add count+2, because we add 1 last step], 
         // count+1, if have (, left-1 for [only need 1 ), we add 1 to count before.]
          l==0 ? count+=1 : l-=1;
        }
    }
    return l==0 ? count : count+(l*2);
};