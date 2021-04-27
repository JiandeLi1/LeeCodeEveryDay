/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle==""){return 0;}
    let n=needle.length;
    let h=haystack.length;
    let result=-10;
/*
For each index, we slice the haystack to haystack.length-needle.length part.
Each substring start add each index until index == haystack.length-needle.length.
For example, haystack='aabb', needle='ab',we got all substring {aa,ab,bb},
and result is 1.
We just need a for loop to traverse all substring, if index of substring==needle,
return the index of substring. Also need to break the for loop because we need to return the first index of than substring == needle. If there are multiple substring == needle, we always return the first one.
*/    
    for(let i=0;i<=h-n;i++){
        if(haystack.slice(i,i+n)==needle){
            result=i;
            break;
        }
    }
    result =result>-1 ?  result : -1;
    return result;
};