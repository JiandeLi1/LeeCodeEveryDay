/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
     let m = new Map()
    for(let i =0;i<nums.length;i++){
        m.set(nums[i], m.get(nums[i]) ? m.get(nums[i])+1 : 1)    
    }  
    
    let nm= new Map([...m].sort((a,b)=>b[1]-a[1]))
    let res=[]
    let count=0
    for (const [key, value] of nm.entries()) {
        if(count===k) break
        count++
        res.push(key)  
    }   
    
    return res
};