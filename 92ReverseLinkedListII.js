var reverseBetween = function(head, left, right) {
    /*one Pass*/
    let lList=new ListNode(0,null);
    let l=lList
    let mList=null;
    let Temp=head
    for(let i=1;i<left;i++){
        l.next=new ListNode(Temp.val, null)
        l=l.next
        Temp=Temp.next
    }
    let t=null
    for(let i=left;i<=right;i++){
        mList=new ListNode(Temp.val, mList)
        if(i==left){
            t=mList
        }
        Temp=Temp.next}
    t.next=Temp
    l.next=mList
    return lList.next 
    
    
    /*
    *********two pass****************
    let lList=new ListNode(0,null);
    let l=lList
    let rList=new ListNode(0, null);
    let mList=new ListNode();
    let m=mList
    let Temp=head
    for(let i=1;i<left;i++){
        l.next=new ListNode(Temp.val, null)
        l=l.next
        Temp=Temp.next
    }
    for(let j=left;j<=right;j++){
        m.next=new ListNode(Temp.val, null)
        m=m.next
        Temp=Temp.next
         if(j==right){
            rList.next=Temp
        }
    }
    let res=new ListNode();
    mList=mList.next
     while(mList){
        res=new ListNode(mList.val, res)
        mList=mList.next
    }
    let res2=new ListNode(0,null)
    lList=lList.next
    let res3=res2
    for(let i=1;i<left;i++){
        res3.next=new ListNode(lList.val, null)
        res3=res3.next
        lList=lList.next
    }
    for(let i=left;i<=right;i++){
        res3.next=new ListNode(res.val,null )
        res3=res3.next
        res=res.next
    }
   res3.next=rList.next
    return res2.next
    */
};