/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let signStack=[1]
    let nums=['0','1','2','3','4','5','6','7','8','9']
    let sign=1
    let len=s.length
    let res=0
    for(let i=0;i<len;i++){
      if(s.charAt(i)===' '){
            continue
        }else if(s.charAt(i)==='+'){
            sign=signStack[signStack.length-1]
        }else if (s.charAt(i)=='-'){
            sign=-signStack[signStack.length-1]
        }else if(s.charAt(i)=='('){
            signStack.push(sign)
        }else if(s.charAt(i)==')'){
            signStack.pop()
        }else if(nums.includes(s.charAt(i))){
            let n=s.charAt(i)*1
            while(nums.includes(s.charAt(i+1))){
                  i++
                  n=n*10+(s.charAt(i)*1)
                  }
            res += sign*n
        }
    }
    return res
};
