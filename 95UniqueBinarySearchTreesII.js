/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    var makeTree=(start,end)=>{
        if(start>end) return [null]
        let res=[]
        for(let i=start;i<=end;i++){
            for(let left of makeTree(start,i-1)){
                for(let right of makeTree(i+1,end)){
                    let node=new TreeNode(i)
                    node.left=left
                    node.right=right
                    res.push(node)
                }
            }
        }
        return res;
    }
    return makeTree(1,n)
};