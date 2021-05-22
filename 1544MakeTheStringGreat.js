/**
 * @param {string} s
 * @return {string}
 */
/*
Time complexity: O(n);
Space complexity: O(n);
Exaple:abBAcC=>[a,b,B,A,c,C]
i=0,stack=[], stack.push(a)
i=1,stack=[a], b is not a, stack.push(b)
i=2,stack=[a,b], B is upper b, stack.pop(b)
i=3,stack=[a], A is upper a, stack.pop(a)
i=4,stack=[], stack.push(c)
i=5,stack=[c], C is lower c, stack.pop(c)
i=6,i+s.length, halt.
stack in empty, return '';
*/


//Using stack
var makeGood = function(s) {
    let stack=[];
    s=s.split('');
    let len=s.length;
    for(let i=0;i<len;i++){
        let last=stack[stack.length-1]||'';
        (s[i].toLowerCase()==last.toLowerCase()) && (s[i]!=last) ?
        stack.pop() : 
        stack.push(s[i]);
        }
    return stack.join('');
};

/*
Time complexity: O(n);
Space complexity: O(n);
Exaple:abBAcC
i=0, a!=b
i=1,b==lower B, s=aAcC
i=-1,i++
i=0,a==lower A, a=cC
i=-1,i++
i=0,C==upper b, s=''
s is empty, return '';
Only loop
var makeGood = function(s) {
    for(let i=0;i<s.length;i++){
        if((s.charAt(i).toLowerCase()==s.charAt(i+1).toLowerCase()) &&
           (s.charAt(i)!=(s.charAt(i+1)))){
                s=s.slice(0,i)+s.slice(i+2);
                i-=2;
            }
        }
    return s;
};
*/