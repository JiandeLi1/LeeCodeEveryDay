/**
 * @param {string} s
 * @return {number[]}
 */
/*
Time complexity: O(n)
Space complexuty: O(n)

Strategy: using a array to record last positions of all the letters in the position
 array, if a letter record in the position array, the last position equal the current
  position in the s， means no any this letter will appear in the rest array. The last
   record for this letter minus start add 1, return the amount of thr length of the 
   sub string. Then start = end +1, start the new around.
*/
var partitionLabels = function(s) {
    const lastPosition=Array(26).fill(0)
    const aCharCode= 'a'.charCodeAt()
    const len=s.length
    let start=0,end=0
    let res=[]
    for(let i=0;i<len;i++){
        lastPosition[s[i].charCodeAt()-aCharCode]=i
    }
    for(let j=0;j<len;j++){
        end=Math.max(end,lastPosition[s[j].charCodeAt()-aCharCode])
        if(j===end){
            //If i===end, means current s[i] will not appear at rest string
            //push the position+1 to res
            res.push(end-start+1)
            start=end+1
        }
    } 
    return res
};