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
/*
Time Complexity: O(n)
Space Complexity: O(1)
Using Cycle when p1 is done, go to headB,
            when p2 is done, go to headA,
That will always work when them are change one time, expleam,
p1(init), headA 1 1 1 1 2 2
p2(init), haedB   3 3 3 2 2 

After one change,
            |
p2, headA 1 1 1 1 2 2
            |
p1, haedB   3 3 3 2 2 

Then they are in same position

*/
var getIntersectionNode = function(headA, headB) {
     if(!headA || !headB) return null
     let p1=headA, p2=headB 
     while(p1!=p2){
         if(p1==null){
             p1=headB
         }else{
             p1=p1.next
         }
         if(p2==null){
             p2=headA
         }else{
             p2=p2.next
         }
     }
   return p1
    
/*
Time complexity: O(n^2)
Space complexity: O(1)
Brute force algorithm
 let h1=headA
    let res=null
    while(h1){
        let h2=headB
        while(h2){
            if(h1==h2){
                res=h1
                break
            }
            h2=h2.next
        }
        h1=h1.next
        if(res!=null){
            break
        }
    }
    return res
*/
};