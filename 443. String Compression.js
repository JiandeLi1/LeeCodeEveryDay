/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
   //  let idx=0
   //  let curr=1
   //  let res=[]
   //  let len= chars.length
   //  if(len<=1) return
   //  while(curr<=chars.length){//n
   //      if(curr<chars.length && chars[idx]===chars[curr]){
   //          curr++
   //      }else{
   //          let rep=curr-idx
   //          res.push(chars[idx])
   //          if(rep>1){
   //              let repString= rep.toString()
   //              for(let i=0;i<repString.length;i++){
   //                  res.push(repString[i])
   //              }
   //          }
   //          idx=curr
   //          curr++
   //      }
   //  }
   // chars.splice(0,len)
   // for(let i=0;i<res.length;i++){
   //     chars.push(res[i])
   // }
    
    
    if(chars.length<=1) return 
    let idx=0
    let curr=0
    let replace=0
    while(curr<=chars.length){
        curr++
        if(chars[idx]!==chars[curr]){
            let rep=curr-idx
            chars[replace++]=chars[idx]
            if(rep>1){
                let repString= rep.toString()
                for(let i=0;i<repString.length;i++){
                    chars[replace++]=repString[i]
                }
                
             }
            idx=curr
        }
    }
    return replace
};
