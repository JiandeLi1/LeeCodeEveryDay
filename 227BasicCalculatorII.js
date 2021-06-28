/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack=[]
    s=s.trim()
    const nums=[' ','0','1','2','3','4','5','6','7','8','9']
    const len=s.length
    let sign='+'
    for(let i=0;i<len;i++){
        let n=0
        while(nums.includes(s.charAt(i)) && i<=len-1){
            if(s.charAt(i)==" "){
                i+=1
            }else{
             n=n*10+(s.charAt(i) * 1)
             i+=1
            }
        }
       if(i==len || !nums.includes(s.charAt(i))){
       switch(sign){
           case '+':
               stack.push(n);
               break
           case '-':
               stack.push(-n);
               break
           case '*':
               stack.push(stack.pop() * n);
               break
           default:
               stack.push(stack[stack.length-1]>=0 ?
                          (Math.floor(stack.pop() / n) | 0) :
                          (Math.ceil(stack.pop() / n) | 0));
       }
    }
     sign=s.charAt(i) 
    }
    let res=stack.reduce((a,b)=>{
        return a+b
    })
    return res
};