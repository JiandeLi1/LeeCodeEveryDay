/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let count=0
    let curr=head
    let stack=[]
    while(curr){
        count+=1
        curr=curr.next
    }
    let half=Math.floor(count/2)
    let p=head
    for(let i=0;i<half;i++){
        stack.push(p.val)
        p=p.next
    }
    if(count%2!=0){
        p=p.next
    }
    for(let i=0;i<half;i++){
       if(p.val==stack.pop()){
           p=p.next
       }else{
           return false
       }
    }
    return true
};