/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let cur=head
    let count=0
    while(cur){
        count+=1
        cur=cur.next
    }
    cur= head
    const treeify=(i,j)=>{
        if(i>j) return null
        let m=i+j>>1
        console.log(i,j,m)
        let node=new TreeNode()
        node.left=treeify(i,m-1)
        node.val=cur.val
        cur=cur.next
        node.right=treeify(m+1,j)
        return node
    }
    
    return treeify(1,count)
};