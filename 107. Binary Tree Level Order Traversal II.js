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
 /*
 Time conplexity: O(n)
 Space complexity: O(n)
  */
var levelOrderBottom = function(root) {
    let res=[]
    if(!root) return res
    let queue=[root]
    while(queue.length){
        let temp=queue.length
        let level=[]
        for(let i=0;i<temp;i++){
            let node=queue.shift()
            level.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        res.push(level)
    }
    return res.reverse()
};