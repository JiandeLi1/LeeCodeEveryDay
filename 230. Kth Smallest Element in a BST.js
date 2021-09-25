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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let list=[]
    const dfs=(node,sum)=>{
        if(!node) return
        if(list.length<k){
         dfs(node.left)
         list.push(node.val)
         dfs(node.right)
        }
    }
    dfs(root)
    return list[k-1]
};