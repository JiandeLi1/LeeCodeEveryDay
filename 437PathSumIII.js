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
 * @return {number}
 */

/*
For, each node, we set these are the start,if the sum of betweenthe node and previous path's 
node equal targetSum, we retuen 1 + traverse left and right node.
Also, the next left node and right node are the new start for the new path.
*/
var pathSum = function(root, targetSum) {
    if(root==null){return 0};
    return bfs(root, targetSum) +pathSum(root.left,targetSum)+pathSum(root.right,targetSum);
   
};
const bfs=(cur, sum)=>{
        if(cur==null){return 0}
        sum-=cur.val;
        return (sum===0 ? 1 : 0) + bfs(cur.left,sum)+bfs(cur.right,sum);
}