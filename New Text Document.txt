/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
        let n = nums.length;
        let maxWidth = 0;
        let stack = [];
    /*
    nums=[6,0,8,2,1,5,10]
    current index=6
    stack=[0,1]
    */
        for (let i=0;i<n;i++) {
            if (!stack.length || nums[stack[stack.length-1]] > nums[i]) {
                stack.push(i);
            }
        }
    /*
    nums=[6,0,8,2,1,5]
    current index=5
    stack=[0]
    */
        for (let i=n-1;i>=0;i--) {
            while (stack.length && nums[stack[stack.length-1]] <= nums[i]) {
                let pos = stack.pop();
                maxWidth = Math.max(maxWidth, i - pos);
            }
        }
        return maxWidth;
};