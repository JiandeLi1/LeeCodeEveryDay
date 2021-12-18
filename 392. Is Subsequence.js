var isSubsequence = function(s, t) {
    // if (s.length===0) return true
    // let index=0
    // let count=0
    // for(let i=0;i<s.length;i++){
    //     while(t[index]!=s[i] && index<t.length){
    //         index+=1
    //     }
    //     if(t[index]===s[i]){
    //        count+=1
    //         index++
    //        if(count===s.length) return true
    //     }
    // }
    // return false
    
    const n= s.length
    const m= t.length
    let i=0;
    let j=0;
    while(i<n && j<m){
        if(s[i]===t[j]){
            i++
        }
        j++
    }
    
    return i===n
    
};