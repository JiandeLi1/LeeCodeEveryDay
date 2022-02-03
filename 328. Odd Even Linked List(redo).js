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
var oddEvenList = function(head) {
    if(!head || !head.next || !head.next.next) return head
    let l1=head
    let l2=head.next
    let ec=l2
    let res=l1
    while(l1.next||l2.next){
       if(l2.next && l2.next!= l1){
           l1.next = l2.next
           l1=l1.next
       }else{
           l2.next=null
       }
       if(l1.next && l1.next != l2){
           l2.next = l1.next
           l2=l2.next
       }else{
           l1.next = null
       }
      //l1:1->2 l2:2, 2.next can not be itself
      //if (l1.next==l2) l1.next = null
      //l1:3 l2:2->3 3.next can not be itself
      //if (l2.next==l1) l2.next = null
    }
    l1.next=ec
    return res
};