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

/*
    preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    map->([9,0], [3,1], [15, 2], [20, 3], [7,4])
    
   3 in first number in the perorder, 3's index in inorder is 1
        3 
   left     right
   [9]      [15,20,7]
   --------------------------------------------------------------
   9 is second in per,       |  20 is third in per,       
   3's index in inorder is 0 |  20's index in inorder is 4
   left    right             |         20
   null    null              |left             right
                             |[15]             [7]
*/
var buildTree = function(preorder, inorder) {
    //if (!preorder.length || !inorder.length) return null
    let m = new Map()
    let index=0
    for(let i =0;i<inorder.length;i++){
        m.set(inorder[i], i)
    }
    
    const bfs=(start, end)=>{
        if(start>end) return null
        let node = new TreeNode(preorder[index])
        let i = m.get(preorder[index++])
        node.left = bfs(start, i-1)
        node.right= bfs(i+1,end)
        return node
    }
    return bfs(0, preorder.length-1)
    
};