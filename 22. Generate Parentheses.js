/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[]
    const bt=(curr, l, r)=>{
        if(l==0&&r==0){
            res.push(curr)
            return
        }
        if(l===r){
           bt(curr+'(',l-1,r)
        }else{
           if(l>0){
            bt(curr+'(',l-1,r)
           }
           bt(curr+')',l,r-1)
        }
    }
    bt('', n, n)
    return res
    
};