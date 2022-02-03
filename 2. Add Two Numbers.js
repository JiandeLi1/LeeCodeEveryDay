/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum1=0n
    let sum2=0n
    let count1=1n
    let count2=1n
    while(l1){
        sum1=(BigInt(l1.val)*count1)+sum1
        count1=count1*10n
        l1=l1.next
    }
    while(l2){
        sum2=(BigInt(l2.val)*count2)+sum2
        count2=count2*10n
        l2=l2.next
    }
    let sum3=sum1+sum2
    let l3= new ListNode(0,null)
    let res = l3
    if(sum3===0n){
        l3.next=new ListNode(0, null)
    }
    while(sum3!=0n){
        let remainder = sum3 % 10n
        l3.next = new ListNode(remainder, null)
        sum3=(sum3 - remainder) / 10n
        l3=l3.next
    }
    return res.next
};