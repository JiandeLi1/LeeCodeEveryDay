/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result=[];//To save the all result
    aux('(',n-1,n,result);
    return  result;
};

/*
Now,we have a integer n. That mean we need to return all combinations of well-formed parentheses.
To make sure return is a well-formed parentheses, we need to hava counter to count how many ( and ) left. The most import thing we easy to ignore is ) always equal or less than (. If we have any situation like ()), (()))... That mean our result definitely wrong.

*/
const aux=(str,l,r,result)=>{
//If all l is done [l is the counter of (, also, r is counter of )], so we only have ) need to finsh, str+r*), and push it to result 
    if(l==0){
        for(let i=0;i<r;i++){
            str+=')';
        }
        result.push(str)
        return;
    }
//If last char in str is ), we need to think about ( and ) are balence before, if r==l, that means ( and ) balence before. We can not add a ) to damage the well formed structrue. We need to have a new star for other well-formend parenthese. Otherwise, add ( or ) are ok, just need to minus from corresponding counter.
    if(str.slice(-1)==")"&&r-l==0){
        aux(str+'(',l-1,r,result);
    }else{
        aux(str+')',l,r-1,result)
        aux(str+'(',l-1,r,result)
    }
}