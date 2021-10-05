/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//iter TC:O(H) SC:O(1) 
// var lowestCommonAncestor = function(root, p, q) {
//     while(root){
//         if(root.val>p.val && root.val >q.val){
//             root=root.left
//         }else if(root.val<p.val && root.val<q.val){
//             root=root.right
//         }else{
//            return root
//         }
//     }
// };

//Rec TC:O(H) SC:O(H) 
var lowestCommonAncestor = function(root, p, q) {
       if(root.val>p.val && root.val >q.val){
          return lowestCommonAncestor(root.left, p, q)
        }else if(root.val<p.val && root.val<q.val){
          return lowestCommonAncestor(root.right, p, q)
        }else{
          return root
        }
};