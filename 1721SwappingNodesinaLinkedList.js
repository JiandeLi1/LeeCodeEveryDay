/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let first=null
    let fast=head, slow=head
    for(let i=1;i<k;i++){
        fast=fast.next
    }
    first=fast
    let temp=fast.val
    while(fast.next){
        fast=fast.next
        slow=slow.next
    }
    first.val=slow.val
    slow.val=temp
    return head
};