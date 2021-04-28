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
 * @return {number}
 */
var countNodes = function(root) {
/*
    one line solution, time complexity O(n), just using recursion to count
    each node.
    
    return root ? (1+countNodes(root.left)+countNodes(root.right)) : 0;
*/    
    
    
/*
Time complexity: O(log^2N)
Counter the depth first, 
using binary search to find the last node in last level,
we know that if a perfect tree, all node are exise, complete tree, only last level not
full.
Using binary search to search the last level, to find the lat node we have, 
than (depth-1)^2+last level node -1 = result.
*/    
    
    
    if(!root){return 0;}
    let depth=0;
    let curr=root;
     while(curr){
         curr=curr.left;
         depth++;
     }
    if(depth==1){return 1};
    
    //Each search will start at root, index is the last step binary search m,
    //Each time will go depth steps, if cur is exise return true, else false;
    //We can imagine that,  if the index is larger than mid, the index is in right side,
    //So go right,left=mid+1,
    //otherwise, go left, right=mid-1;
    const notNull=(index)=>{
        let left=0, right=Math.pow(2,depth-1)-1;
        let cur=root;
        for(let i=0;i<depth-1;i++){
            let mid=Math.floor((left+right)/2);
            if(index>mid){
                left=mid+1;
                cur=cur.right;
            }else{
                right=mid-1;
                cur=cur.left;
            }
            }
        return cur != null;
    }
    
    //Using binary search to get the to check last node, we need to 
    //search the mid node in level in exise or not, if yes, l=m+1,
    //else r=m-1. if l<=r, that means the binary search is finish, 
    //return (depth-1)^2+last level node -1 = result.
    let l=0,r=Math.pow(2,depth-1)-1;
    while(l<=r){
        let m=Math.floor((l+r)/2);
        if(notNull(m)){
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return Math.pow(2,depth-1)+l-1;
};

