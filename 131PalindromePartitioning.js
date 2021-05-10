/**
 * @param {string} s
 * @return {string[][]}
 */
/*
Using backtracking, start at each index, and work of rest of array.
To implement,  we can use recursion, for each str.slice(i,j) (i is start index of
each first part, j is end index of each first part.)


For example, 
            a      
dfs([],'aab')           a,[ab] 
                        /     \
                     a,a,[b] aa,[b]  dfs([a],'ab') for first call wheni=1,[aa],b,i=2 
                      /         \
                    a,a,b      aa,b  b can not be palindrome with front part, next call
                                     dfs([aa,b],'')&dfs([a,a,b],''), push them to res.
*/
var partition = function(s) {
    let result=[];
    const dfs=(arr, str)=>{
        if(!str.length){
            result.push(arr);
            return;    
        };
        for(let i=1;i<=str.length;i++){
            let level=str.slice(0,i);
            (level==level.split('').reverse().join('')) &&
            (dfs([...arr,level], str.slice(i)));
            
    }
    }
    dfs([],s);
    return result;
};