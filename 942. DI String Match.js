/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let res=[]
  let low=0;
  let high=s.length
  for(let i=0;i<s.length;i++){
     if(s[i]==='I'){
         res.push(low++)
     }else{
         res.push(high--)
     }
  }
  res.push(high)
  return res
};