/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // Time complexity=O(n)
    // Space complexity=O(n)
    if(!head) return null
    let m=new Map()
    let p=head
    while(p){
        m.set(p, new Node(p.val, null,null))
        p=p.next
    }
    p=head
    while(p){
        m.get(p).next=m.get(p.next) ||null
        m.get(p).random=m.get(p.random) ||null
        p=p.next
    }
    return m.get(head)
    
    
    /*
    Time complexity=O(n^2)
    Space complexity=O(n)
    const m= new Map()
    let p=head
    let res=new Node(0, null,null)
    let res2=res
    let count=0
    while(p){
        let temp=head
        res2.next=new Node(p.val, null, null)
        let counter=0
        while(temp){
              if(p.random==temp){
                  break
              }
              counter+=1
              temp=temp.next
              }
        m.set(count++,counter )
        p=p.next
        res2=res2.next
    }
    let p2=res.next
    for(let i=0;i<count;i++){
        let t=null
        let tn=res.next
        for(let j=0;j<m.get(i);j++){
            tn=tn.next
        }
        p2.random=tn
        p2=p2.next
    }
    return res.next
    */
};