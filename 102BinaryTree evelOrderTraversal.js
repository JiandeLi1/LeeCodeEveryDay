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
     if (!root){return []};
     let result=[]
     let que=[];
     que.push(root);
    while(que.length){
        let len= que.length;
        let layer=[];
        for (let i = 0; i<len;i++){
            let curr= que.shift();
            layer.push(curr.val);
            (curr.left) && (que.push(curr.left));
            (curr.right) && (que.push(curr.right));
        }
        result.push(layer);
    }
    
    return result;
};

