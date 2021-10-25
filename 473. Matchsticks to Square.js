/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if(!matchsticks.length) return false
    const total= matchsticks.reduce((a,b)=>a+b)
    if(total%4!==0) return false
    const average=total/4
    matchsticks.sort((a,b)=>b-a)
    let side=Array(4).fill(0)
    const dfs=(index)=>{
        if(index===matchsticks.length){
            return (side[0]===side[1] &&
                    side[1]===side[2] &&
                    side[2]===side[3])
           }
        let s=matchsticks[index]
        if(s>average) return false
        for(let i=0;i<4;i++){
           if(side[i]+s<=average){
               side[i]+=s
               if(dfs(index+1)){
                   return true
               }
               side[i]-=s
           }
        }
        return false
    }
    
    return dfs(0)
};