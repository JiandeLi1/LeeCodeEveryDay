/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
We make a map to record the sum for start to each index in the nums.
nums     1 1 1
sum    0 1 2 3
sum-k    0 1 2

sum - k = is the gap the between them, if we have any Prefix sum 
equal (sum - k), than means before the index i from index i, there is/are
some gap equal k.
When we traverse the nums, if a sum we already has before, we just need to 
set the value of map(sum) +1, if in later, we have any sum-k = map(sum), that means,
there are value of map(sum) gaps' sum = k, just add value of map(sum) to counter.
*/ 
var subarraySum = function(nums, k) {
    let m=new Map();
    let sum=0;
    let counter=0;
    m.set(0,1);
    for(let i =0; i<nums.length;i++){
        sum+=nums[i];
        m.get(sum-k) &&(counter+=m.get(sum-k));
        m.get(sum) ? m.set(sum,m.get(sum)+1) : m.set(sum,1);   
    }
    return counter;
};