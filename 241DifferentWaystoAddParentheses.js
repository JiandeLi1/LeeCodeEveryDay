/**
 * @param {string} expression
 * @return {number[]}
 */
/*
Time complexity:O(n), Space complexity: O(n)
We use a for loop to break the exp when we see the index in exp is '+','-' and '*', 
For example, 
'2-1-1'
ways('2') ways('1-1')
ways('2') ways('1') ways('1');
after the exp is a number (we nned to convert the string to number using parseInt),
Also, in the for loop, when index of exp is is '+','-' and '*', we do the calculate 
also,
ways('2') - ways('1'),ways('1')-ways('1');--->return the result
The result will return, next step ,merge the third numbe,
ways(1)-ways('1'), ways('2')-ways('0');
Now, all number are calculate,
return result.

Note!: We can use a map to record all result for all sub exps, if the map has the sub
 exp result brefore, just return it. We don't need to do the calculation again.
 
*/

var diffWaysToCompute = function(expression) {
    let res=new Map();
    const ways=(e)=>{
    if(res.has(e)){return res.get(e)};
    let level=[];
    for(let i=0;i<e.length;i++){
        if(e.charAt(i)=='+'||e.charAt(i)=='-'||e.charAt(i)=='*'){
            for(let l of ways(e.slice(0,i))){
                for(let r of ways(e.slice(i+1))){
            (e.charAt(i)=='+') && (level.push(l+r));
            (e.charAt(i)=='-') && (level.push(l-r)); 
            (e.charAt(i)=='*') && (level.push(l*r));
                };
            };
        };
    };
     (level.length==0) && (level.push(parseInt(e)));  
     res.set(e,level);
        return level;
    };  
    return ways(expression);
};