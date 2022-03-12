/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    let bucketNum = Math.floor((max-min)/nums.length)+1
    
    let bucket= new Array(bucketNum)
    
    for(let i=0;i<bucketNum;i++){
        bucket[i]=new Array()
    }
    
    for(let i=0;i<nums.length;i++){
        let n=Math.floor((nums[i]-min)/nums.length);
        bucket[n].push(nums[i])
    }
    
    for(let i=0;i<bucketNum;i++){
        bucket[i].sort((a,b)=>a-b)
    }
    
    let res=0
    for(let i=bucketNum-1;i>=0;i--){
        for(let j=bucket[i].length-1;j>=0;j--){
            k--
            if(k===0){
                res=bucket[i][j]
            }
        }
    }
    
    return res
};