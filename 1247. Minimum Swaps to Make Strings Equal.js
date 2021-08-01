/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
   let xy = 0;
   let yx = 0;
   for(let i=0;i<s1.length;i++) {
       if(s1[i] === "x" && s2[i] === "y") {
           xy+=1
       }
        if(s1[i] === "y" && s2[i] === "x") {
           yx+=1
       }
   }
   const res=Math.floor(xy/2)+Math.floor(yx/2)
   return xy%2==0 && yx%2==0 ? res : xy%2!==0 && yx%2!==0 ? res+2 : -1
};