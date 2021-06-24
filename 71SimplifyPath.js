/**
 * @param {string} path
 * @return {string}
 */
/*
Time complexity: O(n)
Space complexity: O(n)
First of all, we can use path.split('/') to split the path to array, also we do not need 
to consider the '/' problem in this problem.
Next, we can make a array, if the element in splitted array not equal '..','.' and '' push 
to the new array, if the element is '..' refers to the directory up a level, delete the 
last element in the ans array. After traverse all element in aplitted array, we just need 
to merge the ans array with '/', also add a '/' in front, that should be right!
*/
var simplifyPath = function(path) {
     let ans=[]
     for(let e of path.split('/')){
        if(e!='.'&&e!='..'&e!=''){
            ans.push(e)
        }else if(e==='..'){
            if(ans.length) ans.splice(ans.length-1)
        }
     }
    return `/${ans.join("/")}`
};