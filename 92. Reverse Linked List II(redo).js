/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    /*one Pass*/
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;
    let per= dummy_node
    for(let i=0;i<left-1;i++){
        per=per.next
    }
    let curr=per.next
    for(let i = left; i<right;i++){
        let temp = curr.next
        curr.next=temp.next
        temp.next= per.next
        per.next= temp
    }
    return dummy_node.next
};