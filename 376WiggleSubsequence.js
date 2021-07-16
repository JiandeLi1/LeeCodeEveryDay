/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    /*
    Time complexity: O(n)
    Space complexity: O(1)
    up:6
    down:5
    [1,2,4,4,2,6,2,8]
    */
    let up = 1, down = 1, len=nums.length
    for(let i = 1; i < len; i++) {
        if(nums[i] > nums[i-1]){
            up = down + 1
        }else if(nums[i] < nums[i-1]){
            down = up + 1;
        }
    }
    return Math.max(up, down)
};