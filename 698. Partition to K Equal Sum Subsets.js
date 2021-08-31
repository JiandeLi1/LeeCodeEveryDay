/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const total = nums.reduce((a,b)=>a+b, 0)
    if(total%k != 0) return false
    const len= nums.length
    let visited = Array(len).fill(false)
    const backTracking=(curr, sub,sum)=>{
        if(sub===k) return true
        if(sum>total/k) return false
        if(sum===total/k){
            return backTracking(0,sub+1,0)
        }
        
        for(let i=curr; i<len ;i++){
            if(visited[i]) continue
            visited[i]=true
            if(backTracking(i+1,sub, sum+nums[i])) return true
            visited[i]=false
        }
        
        return false
    }
    return backTracking(0,0,0)
};