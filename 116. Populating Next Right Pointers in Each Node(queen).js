/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    /*
        Using queen
        end=1
        index=0
        if end>=index && q[0] is exist node.next=q[0] else node.next=null
        [1,2,3,4,5,6,7]
        
        -------------------------------------------------------------
        
        end=1, index=1
        [1].pop()=[1], q=[], end>index is false && q[0] doesn't exist
        [1].next=null first node, push [].left and rigt to q=[2,3]
        end=end*2, index =0
        index++
        
        -------------------------------------------------------------
        
        end=2, index=1
        [2,3].pop()=[2], q=[1], 2>0 is true && q[0] is exist
        [2].next=q[0]=[3], push [2].left and rigt to q=[3,4,5]
        index++
        
        end=2, index=2
        [3,4,5].pop()=[2], q=[4,5], 2>2 is false && q[0] is exist
        [3].next=null, push [3].left and rigt to q=[4,5,6,7]
        end=end*2=4, index =0
        index++
        
        -------------------------------------------------------------
        
        ......
        
        
    */
    if(!root) return root
    let q=[]
    let curr = root
    let end = 1
    let index= 0
    q.push(curr)
    while(q.length){
          let c_n= q.shift();
          if((end > index) && q[0]) {
             c_n.next = q[0]
          }else{
             c_n.next = null
             end*=2
             index=0
          }
        if(c_n.left) q.push(c_n.left)
        if(c_n.right) q.push(c_n.right)
        index++
    }
    return root
};