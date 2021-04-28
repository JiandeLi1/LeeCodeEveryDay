/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
/*
Time complexity: O(n)
Go each way, end on root is null or root left and right are null.
If the sum of all node.val === target, push to result, otherwise, return;

Why need to traverse all node, if some node.val is negative, it will full of nuknow,
For example, target=10, before the last node, a way shows us [1,2,3,4,5]=15, the sum
of it is larger than 10, but thae last node.val may equal -5, so [1,2,3,4,5,-5]=target.
That is way need to go through all node (in my solution).
*/

var pathSum = function(root, targetSum) {
    let result=[];
    const aux=(curr,arr,sum)=>{
         if(!curr){
            return;
        }
        if(!curr.left&&!curr.right){
            if(sum+curr.val==targetSum){
            result.push(arr.concat(curr.val));
            }
            return;
        }
        aux(curr.left,arr.concat(curr.val) ,sum+curr.val);
        aux(curr.right,arr.concat(curr.val) ,sum+curr.val);
}
    aux(root, [], 0);    
    return result;
    
};

