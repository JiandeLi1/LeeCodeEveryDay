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
  if(!head || ! head.next) return head
  let p=head
  let odd=p, even=p.next
  let eCopy=even
  p=p.next.next
  while(p&&p.next){
     odd.next=p
     odd=odd.next
     even.next=p.next
     even=even.next
     p=p.next.next
  }
   even.next=null
   if(p){
      odd.next=p
      odd=odd.next
   }
   odd.next=eCopy
   return head
};