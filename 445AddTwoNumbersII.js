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
    let sumA=0n, sumB =0n
    let p1=l1, p2=l2
    while(p1){
        sumA=sumA*10n+BigInt(p1.val)
        p1=p1.next
    }
    while(p2){
        sumB=sumB*10n+BigInt(p2.val)
        p2=p2.next
    }
    let res=sumA+sumB
    if(res==0n) return new ListNode(0, null)
    let root=null
    while(res){
        root=new ListNode(res%10n, root)
        res=res/10n
    }
    return root
};