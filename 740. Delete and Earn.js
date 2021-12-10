/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let sum = new Array(Math.max(...nums)+1).fill(0)
    for(const val of nums){
        sum[val]+=val
    }
    
    const rob=(n)=>{
        const size= n.length
        let f=n[0]
        let s=n[1]
        
        for(let i=2;i<size;i++){
            let temp=s
            s=Math.max(f+n[i],s)
            f=temp
        }
        return s
    }
    
    return rob(sum)
};