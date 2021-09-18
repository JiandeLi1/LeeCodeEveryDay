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
var largestValues = function(root) {
    let res=[]
    if(!root) return res
    let queue=[root]
    
    while(queue.length){
        const len=queue.length
        let max=Math.pow(-2, 31)
        for(let i=0;i<len;i++){
            const node=queue.shift()  
            if(node.val>max) max=node.val
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
          }
        res.push(max)
    }
    return res
};