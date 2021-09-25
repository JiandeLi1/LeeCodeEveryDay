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
 * @return {TreeNode}
 */
// var invertTree = function(root) {
//     if(root===null) return root;
//     [root.left,root.right] = [invertTree(root.right), invertTree(root.left)]
//     return root
// };

 // var invertTree = function(root) {
 //     let stack=[root]
 //     while(stack.length){
 //         let node= stack.pop()
 //         if(node){
 //         ;[node.left, node.right] = [node.right, node.left];
 //          stack.push(node.left)
 //          stack.push(node.right)
 //         }
 //     }
 //     return root
 // }

 var invertTree = function(root) {
     let queue=[root]
     while(queue.length){
         let node= queue.shift()
         if(node){
         ;[node.left, node.right] = [node.right, node.left];
          queue.push(node.left)
          queue.push(node.right)
         }
     }
     return root
 }