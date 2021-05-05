/**
 * @param {number[]} nums
 * @return {number}
 */
/*
We use a for loop to traverse the nums, set two points, one to save the farest
point we can go before the nums[index] is visited. 
Another one, using Greedy algo to save the farest point we can go for each index.
(We assume nums alway can reach the end, we can start at index 1, because first point 
will not be 0, if nums' length is larger than 1. If nums's length is 1, than means 
just one point in the nums, start also the end, path length is 0)

nums     [ 2  3  1  1  4]
i             1  2  3  4  
farest     2  4  4  4  4
FBI        2  2  2  4  4
c          1  1  1  2  2

(FBI= Faster before I, c= counter);

Emphasis!!!!!!!: When index i is largest the FBI, than means FBI need to renew because
the farest way we can go was traversed, we need to one more step to the farest way that
previous the farest way provided by all points using greedy algo. One more step, counter 
need to add 1.

When nums is traversed, return counter.

*/

var jump = function(nums) {
    let len=nums.length;
    if(len==1){return 0};
    let farestBeforeI=nums[0];
    let farest=nums[0];
    let count=1;
    for(let i=1;i<len;i++){
    if(i>farestBeforeI){
        farestBeforeI=farest;
        count++;
    }
        farest=Math.max(farest,i+nums[i]);
    }
    return count;
};
