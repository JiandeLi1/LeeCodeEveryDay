/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let a=false
    let b=false
    let l1= headA
    let l2=headB
    while(!a || !b){
          if(l1===null){
              l1=headB
              a=true
          }else{
              l1=l1.next
          }
        if(l2===null){
              l2=headA
              b=true
          }else{
              l2=l2.next
          }
    }
    while(l1&&l2){
         if(l1===l2){
             break
         }
         l1=l1.next
         l2=l2.next
    }
    
    return l1
};