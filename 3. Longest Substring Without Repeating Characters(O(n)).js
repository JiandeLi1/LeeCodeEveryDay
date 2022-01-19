/**
 * @param {string} s
 * @return {number}
 */

//O(n^2)
var lengthOfLongestSubstring = function(s) {
   let set = new Set()
   let start=0
   let end=0
   let res=0
   //O(n)
   while(start<s.length && end<s.length){
         if (!set.has(s[end])){
             set.add(s[end])
             res= Math.max(res, end-start+1)
             end+=1
        }else{
             set.delete(s[start])
             start+=1
        }
   }
   return res
};
