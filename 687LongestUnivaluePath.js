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
var longestUnivaluePath = function(root) {
    if(!root){return 0}
    let result=0;
    const aux=(curr)=>{
        if(!curr){return 0;}
         let l =aux(curr.left);
         let r =aux(curr.right);
         let pl=0;
         let pr=0;
        if(curr.left&&curr.left.val==curr.val){pl=l+1};
        if(curr.right&&curr.right.val==curr.val){pr=r+1};
        result=Math.max(result, pr+pl)
        return Math.max(pr,pl);
        }
    aux(root);
    return result;
};