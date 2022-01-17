/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    /*
        if min is change, the mid can be less.
        Therefore, if min is change, but mid doesn't change,
        any number in the coming index is large than mid, that means 
        this index of number is larger than the current min, the current mid, 
        also the pass min. Now, we can see the current index number is larger than 
        three number in the nums, there is true.
        Example:
        [2,3,1,4]-> min is changed when index in 2, nums[2]=1, the next index is 4,
        we don't change mid but min. However,even though the last index is last than the pass 
        mid, but there are larger than the pass min and current mid, also that os work.
    */
    let min = nums[0]
    let mid = Infinity
    
    for(let i =1;i<nums.length;i++){
        if (nums[i] > mid) return true;
        nums[i] > min ? mid = nums[i] : min = nums[i];
    }
    return false
};