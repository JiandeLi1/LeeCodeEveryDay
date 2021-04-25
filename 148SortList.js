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
var sortList = function(head) {
    if(!head||!head.next){return head};
    let fast=head;
    let slow=head;
    let mid= head;
    while(fast&&fast.next){
        mid=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    mid.next=null;
    return aux(sortList(head),sortList(slow));
};

const aux=(first, second)=>{
    let result = new ListNode(0);
    let cur=result;
    while(first&&second){
        if(first.val<second.val){
            cur.next=first;
            first=first.next;
        }else{
            cur.next=second;
            second=second.next;
        }
        cur=cur.next;
    }
    if(first){cur.next=first};
    if(second){cur.next=second};
    return result.next;
}