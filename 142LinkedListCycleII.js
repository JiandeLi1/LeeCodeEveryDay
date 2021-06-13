/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
   if(!head || !head.next) return null
   
    let s=head, f=head
    while(f&&f.next){
        s=s.next
        f=f.next.next
        if(s==f) break
    }
    if(!f || !f.next) return null
    s=head
    while(s!=f){
        s=s.next
        f=f.next
    }
    return s      
};