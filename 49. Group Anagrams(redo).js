/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m= new Map();
    for(let i=0;i<strs.length;i++){
        const newStr = strs[i].split('').sort().join('');
        m.set(newStr, 
             m.get(newStr) ? 
             m.get(newStr).concat(strs[i]) :
             [strs[i]]
             )       
    }
    
    return Array.from(m.values())
}