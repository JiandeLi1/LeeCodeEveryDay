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
var zigzagLevelOrder = function(root) {
    let m = new Map()
    let curr = root
    let res = []
    const helper = (n,c) => {
        if(!c) return  
        m.set(n, m.get(n) ? [...m.get(n), c.val]:[c.val])
        helper(n+1,c.left)
        helper(n+1, c.right)
    }
    helper(1,curr)
    m.forEach((val, key)=>{
        if(key%2===0){
               res.push(val.reverse())
           }else{
               res.push(val)
           }
        
    })
    return res
};