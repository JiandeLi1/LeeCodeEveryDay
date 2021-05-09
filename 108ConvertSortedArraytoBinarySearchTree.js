/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
/*
Using divide each half array, because the array is ascending order, he root is mid
 point of the array, than we can use recursion to set mid point of left part to be 
 root left, mid point of right part to be root right. Until arr size is 1 renturn 
 treenode with arr[0], if arr is null, return null.
*/
var sortedArrayToBST = function(nums) {
    if(nums.length==0){return null};
    if(nums.length==1){return new TreeNode(nums[0]);};
        let mid=Math.floor(nums.length/2);
        let root=new TreeNode(nums[mid]);
        root.left=sortedArrayToBST(nums.slice(0, mid));
        root.right=sortedArrayToBST(nums.slice(mid + 1));
    return root;
};