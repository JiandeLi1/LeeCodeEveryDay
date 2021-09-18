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
 * @return {number}
 */
var sumNumbers = function(root) {
    let res=0
    const dfs=(curr,sum)=>{
        if(!curr.left && !curr.right){
            res+=(sum*10+curr.val)
            return
        }
        if(curr.left) dfs(curr.left, sum*10+curr.val)
        if(curr.right) dfs(curr.right, sum*10+curr.val)
    }
    
    dfs(root,0)
    return res
};