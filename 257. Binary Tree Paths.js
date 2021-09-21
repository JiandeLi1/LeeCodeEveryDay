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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res=[]
    const dfs=(node,path)=>{
        if(!node.left && !node.right){
            res.push(path+`${node.val}`)
            return
        }
        if(node.left) dfs(node.left,path+`${node.val}`+'->')
        if(node.right) dfs(node.right,path+`${node.val}`+'->')
    }
    dfs(root,'')
    return res
};