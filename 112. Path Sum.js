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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    let cur=root
    let res=false
    const dfs=(curr, sum)=>{
        sum+=curr.val
        if(!curr.left && !curr.right){
            if(sum===targetSum){
                res=true
            }
            return
        }
        
        if(!res){
            if(curr.left){
                dfs(curr.left,  sum)
            }
            if(curr.right){
                dfs(curr.right, sum)
            }
         }
    }
    dfs(cur, 0)
    return res
};