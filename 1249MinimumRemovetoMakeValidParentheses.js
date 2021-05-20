/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let lStack=[];
    for(let i=0;i<s.length;i++){
        (s.charAt(i)=='(') && (lStack.push(i));
        if(s.charAt(i)==')'){
           if(lStack.length){
               lStack.pop();
           }else{
               s=s.replace(')','');
               i-=1;
           }  
    }
    }
    let lLen=lStack.length;
    for(let j=0;j<lLen;j++){
        let index=lStack.pop();
        s=s.slice(0,index)+s.slice(index+1);
    }
    return s; 
};