/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
/*
Time: O(n^2) solution
Make a copy strs, and sort all item in copyStr.
Push strs' first item to result, make a string than equal sorted first item,
Traverse the strs, if the sorted item equal the item from copyStr, push strs[i]
to result, and delete the strs[i] and copyStr[i], make sure, next loop doesn't see them.

let result=[]
   let copyStr=strs.slice();
   copyStr=copyStr.map(item=>item.split('').sort().join(''));
    console.log(copyStr)
   while(strs.length>0){
       let level=[strs[0]]
       let newStr=level[0].split('').sort().join('');
       strs.splice(0,1);
       copyStr.splice(0,1);
       for(let i=0;i<strs.length;i++){
           if(newStr==copyStr[i]){
                level.push(strs[i]);
                strs.splice(i,1);
                copyStr.splice(i--,1);
                }
       }
       result.push(level);
   }
   return result;
*/    
    
/*
Time complexity: O(n)
Make a map, traverse the strs. Each time, making a string = sorted strs[i],
if map.get(sorted strs[i]) not exist, make a array and put strs[i] is the array, and set the key is sorted strs[i] in the map, value is this array .
Otherwise,  if we already has the key sorted strs[i], we just put the strs[i] to the array, and reset the map using same key, value is the renew array.
Last, traverse the map, push all item to result.
*/
    
    let m=new Map()
    for(let s of strs){
       const temp = s.split('').sort().join('')
       m.get(temp) ?
       m.set(temp, [...m.get(temp),s]):
       m.set(temp, [s])
    }
    
    return Array.from(m.values())
}
    
/*
Time complexity:O(n*mlog(m))

*/
    
//     let m= new Map()
//     strs.forEach((element, index)=>{
//         m.set(element.split('').sort().join(""),
//               m.get(element.split('').sort().join("")) ?
//               [...m.get(element.split('').sort().join("")), index] : [index])
//     })
//     let res=Array.from(Array(m.size),() => new Array())
//     let i=0;
//     m.forEach(value=>{
//         value.forEach(element=>{
//             res[i].push(strs[element])
//         })
//         i++
//     })
//     return res
// };