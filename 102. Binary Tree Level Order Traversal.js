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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    //n^2
//     let res =[]
//     let head= root
//     let queue=[head]
    
//     while(queue.length){
//         let l=queue.length
//         let layer=[]
//         for(let i=0;i<l;i++){
//             const n = queue.shift()
//             if(n.left) queue.push(n.left)
//             if(n.right) queue.push(n.right)
//             layer.push(n.val)
//         }
//         res.push(layer)
//     }
//     return res
   let res=[]
   let level=0
   const rec=(n)=>{
       if(n){
           if(res.length<=level) res.push([])
           res[level].push(n.val)
           level++
           rec(n.left)
           rec(n.right)
           level--
       }
   }
   rec(root)
   return res
};