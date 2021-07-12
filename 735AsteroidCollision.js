/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack=[asteroids[0]]
    const len=asteroids.length
    for(let i=1;i<len;i++){
        let index=asteroids[i]
        while(index!='' && stack[stack.length-1]*index<0){
            if(stack[stack.length-1]>asteroids[i]){
                if(stack[stack.length-1]+asteroids[i]==0){
                    stack.pop()
                    index=''
                }else if(stack[stack.length-1]>asteroids[i]*-1){
                   index=''
                }else{
                    stack.pop()
                }
            }else{
                break
            } 
        };
    (index!='') && (stack.push(asteroids[i]))
    }
    return stack
};