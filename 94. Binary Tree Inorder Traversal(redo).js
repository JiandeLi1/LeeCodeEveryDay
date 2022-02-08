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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return []
    let res=[]
    let stack=[]
    let curr=root
    // recursive O(n)
    // const helper=(r)=>{
    //     if(!r) return 
    //     helper(r.left)
    //     res.push(r.val)
    //     helper(r.right)
    // }
    // helper(curr)
    
    // Iterative O(n)
    
    /*
    [1,2,null,null,3]
    
    list=[1]
    list[len-1]=1, 1.left=2->list=[1,2]
    list[len-1]=2, 2.left=null->list.pop() &res.push(2) & list.push(2.right=3)->list[1,3]
    list[len-1]=3, 3.left&3.right=null->list.pop() & res.push(3)->list=[1]
    because of 1,.left =2, there are infinite loop 1->2.... so we can not use code:
    while(list.length){
        console.log(list)
        if(list[list.length-1].left){
            let node=list[list.length-1]
            list.push(node.left)
        }else if(list[list.length-1].right){
            let node=list.pop()
            res.push(node.val)
            list.push(node.right)
        }else{
            let node=list.pop()
            res.push(node.val)
        }
    
    }
    */
    
    /*
      [1,2,null,null,3]
      stack=[1]->
      stack=[1,2]->
      res=[2] & stack=[1,3]->
      res=[2,3,1]
    */
    
    
    while(curr || stack.length){
        if(curr){
            stack.push(curr)
            curr=curr.left
        }else{
            let node=stack.pop()
            res.push(node.val)
            curr=node.right
        }
    }
    return res;
}
    