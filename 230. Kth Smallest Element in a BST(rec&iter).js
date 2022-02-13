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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //tc=O(n) sc=O(n)
    // let n = 0
    // let res=0
    // const helper=(curr)=>{
    //     if(!curr) return
    //     helper(curr.left)
    //     if(n++ < k) res=curr.val
    //     helper(curr.right)
    // }
    // helper(root)
    // return res
    
    /*
        let root = first.left;
        let stack = [first];
        while (root !== null || stack.length > 0) {
            if (root === null) {
                const poppedNode = stack.pop();    
                k--;
                if (k === 0) {
                    return poppedNode.val;
                }
                root = poppedNode.right;
            }else{
                stack.push(root);
                root = root.left;
            }
        }
    */
    
    let curr=root
    let stack=[curr]
    while(curr || stack.length){
          if(!curr){
              const node= stack.pop()
              k--
              if(k){
                  curr=node.right
              }else{
                  return node.val
              }
          }else{
              stack.push(curr)
              curr=curr.left
          }
    }
};