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
    if (!root){return []}
    let que=[root];
    let result =[];
    let right= false;
    let item;
    while(que.length){
        let len = que.length;
        let layer=[];
            for(let i=0;i<len;i++){
                item = que.shift();
                layer.push(item.val);
                (item.left) && (que.push(item.left));
                (item.right) && (que.push(item.right));
            }
        if(right){
            layer.reverse();
            right=false;
        }else{
            right=true;
        }
        
     result.push(layer)   
    }
    
    return result;
};
    
