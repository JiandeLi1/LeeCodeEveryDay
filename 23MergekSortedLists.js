/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    const merge=(l,r)=>{
       if(!l){
           return r
       }else if(!r){
           return l
       }else if(l.val<r.val){
           l.next=merge(l.next,r)
           return l
       }else{
           r.next=merge(l,r.next)
           return r
       }
    }
    
    const aux=(list, start, end)=>{
        if(start==end){
            return list[start]
        }else if(start<end){
        const m=Math.floor((start+end)/2)
        const l=aux(list,start,m)
        const r=aux(list,m+1,end)
        return merge(l,r)
        }else{
        return null
    }
    }
    return aux(lists, 0, lists.length-1)
};