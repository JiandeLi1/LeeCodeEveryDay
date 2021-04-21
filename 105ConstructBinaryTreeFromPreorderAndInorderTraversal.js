/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length==1){return new TreeNode(preorder[0])};
    let m= new Map();
    let index=0;
    for(let i =0;i<inorder.length;i++){
        m.set(inorder[i],i);   
    }
    
    function bfs(start, end){
        if (start>end){return null};
        let node=new TreeNode(preorder[index]);
        let nodeIndex=m.get(preorder[index++]);
        node.left=bfs(start, nodeIndex-1);
        node.right=bfs(nodeIndex+1, end);
        return node;
    }
    
    return bfs(0, preorder.length-1);
    
};