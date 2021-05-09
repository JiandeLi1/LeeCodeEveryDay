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

/*
Just look at the example (figure):
              1 
             / \
            2   3
           / \ / \
          4  5 6  7
If set left=1, node=1,2,4,8...left*2
If set right=1, node=1,3,5,7...right*2+1
we can use DFS, start at root, push root.left and node.right to quene each time,
and shift one node in the queue each time. Each time we shift, we count++ (Initial=0), 
if count equal right, the new start left=left*2. If count equal left, we end it 
, set curr=null, .
If count not equal left and right, curr.next=the node just shift, and curr=curr.next;
Emphasis!!!!
left=1, right=1, count=0 inital, in the first time while loop, ++count=1, left==count,
so this is the new start. Also right also ==count, but in the spoce in right==count, 
we have to set the previous curr.next= this time quene shift, that means in first loop,
if right==count and execute the code, we will have 1->1->null. Therefore, we need to 
set right==count&&count!=1 to make sure first loop, will not exexute that.
*/

var connect = function(root) {
    if(!root){return root};
    let curr=root;
    let q=[curr];
    let count=0;
    let right=1;
    let left=1;
    while(q.length){
        let cur=q.shift();
        count+=1;
        if(cur.left){
            q.push(cur.left);
            q.push(cur.right);
        };
         if(left!=count&&right!=count){
            curr.next=cur;
            curr=curr.next;
        }
        if(left==count){
            curr=cur;
            left=left*2;
        }
        if(right==count&&count!=1){
            curr.next=cur;
            curr=curr.next;
            curr=curr.next;
            right=right*2+1;
        }
    
    }
    return root;
};