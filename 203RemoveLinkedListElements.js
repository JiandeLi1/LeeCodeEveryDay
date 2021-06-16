/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head&&head.val==val) head.val=-1
    let curr=new ListNode(-1,head)
    while(curr&&curr.next){
        if(curr.next.val==val){
            curr.next=curr.next.next
        }else{ 
            curr=curr.next
        }
    }
    if(head&&head.val==-1){
        head=head.next
    }
    return head
};