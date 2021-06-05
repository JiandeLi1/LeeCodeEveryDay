/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //Iterate
    //Time complexity:O(n)
    //Space complexity: O(n)
    if(head==null) return null
    let res=new ListNode(head.val,null)
    head=head.next
    while(head){
        res=new ListNode(head.val, res)
        head=head.next
    }
    return res
    
    
    
    /*
    recursion
    Time complexity:O(n)
    Space complexity: O(n)
    if(head==null) return null
    const helper=(root, curList)=>{
     let temp=new ListNode(root.val,curList)
     if(root.next==null){
        return temp
     }
     return helper(root.next, temp)
    }
    
    return helper(head)
    */
};