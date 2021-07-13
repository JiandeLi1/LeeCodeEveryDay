/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let step=[]
    let len=target.length
    let count=0
    for(let i=1;i<=len;i++){
        if(!target[i-1]) break
        count= (i==1)? 1 : target[i-2]+1
        while(count<target[i-1]){
            step.push('Push')
            step.push('Pop')
            count+=1
        }   
        step.push('Push')
    }
    return step
};