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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res=[]
    if(!root) return res
    
    const dfs=(curr, level)=>{
        if(!curr) return
        res[level]=curr.val
        dfs(curr.left,level+1)
        dfs(curr.right, level+1)
    }
    
    
    dfs(root, 0)
    
//BFS   
//     let queue = [root]
    
//     while(queue.length){
//         const size=queue.length
//         for(let i=0;i<size;i++){
//             const node=queue.shift()
//             if(i===size-1) res.push(node.val)
//             if(node.left) queue.push(node.left)
//             if(node.right) queue.push(node.right)
//         }
//     }
    
    return res
};