/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let first=null, second=null, curr=list1
    for(let i=0; i<b;i++){
        (i==a-1) && (first=curr);
        curr=curr.next
    }
     second=curr.next
    first.next=list2
    while(first.next){
        first=first.next
    }
    first.next=second
    return list1
    
};