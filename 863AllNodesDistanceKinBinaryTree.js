/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    let m=new Map();//key, val=> root, parent node
    let visited=new Map();
    let result=[];
    const buildMap=(curr,parent=null)=>{
        if(!curr){return};
        m.set(curr,parent);
        visited.set(curr,false);
        (curr.left) && (buildMap(curr.left,curr));
        (curr.right) && (buildMap(curr.right,curr));
    }
   const find=(curr,k)=>{
       if(!curr||visited.get(curr)){return};//If the way was ran or no way to go, return 
       visited.set(curr,true);
       (k==0) && (result.push(curr.val));
       k-=1;
       //Go to the up node
       (!visited.get(m.get(curr))) && (find(m.get(curr),k));
       (curr.left) && (find(curr.left,k));
       (curr.right) && (find(curr.right,k));
   }
   buildMap(root);
   find(target,K);
   return result;
};