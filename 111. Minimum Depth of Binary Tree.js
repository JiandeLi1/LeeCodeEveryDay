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
var minDepth = function(root) {
    if(!root) return 0
    let queue=[root]
    let res=0
    while(queue.length){
        const len= queue.length
        res+=1
        for(let i=0;i<len;i++){
            let node=queue.shift()
            if(!node.left && !node.right){
                queue.length=0
                break
            }
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return res
};