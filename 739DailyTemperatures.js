/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

/*
Time complexity: O(n)
Space complexity: O(n)

Strategy:first of all, we fill up 0 to the answer array. If any index in the temperatures array doesn't have warmer day in future, the index position in the answer array is 0.

We need to also create a stack to store the index of temperatures 

Then, we can traverse the temperatures. while stack is not empty and 
          temperatures[i] > temperatures[value stack last index]
We set the answer[value of stack last index] = i-value of stack last index

after the while loop, push i to stack

after the traverse of the temperatures, answer array is the final answer
*/
var dailyTemperatures = function(temperatures) {
    let stack=[]
    let len=temperatures.length
    let res=new Array(len).fill(0)
   
    
    for(let i=0;i<len;i++){
        while(stack.length && (temperatures[i]>temperatures[stack[stack.length-1]])){
            const last=stack.pop()
            res[last]=i-last
        }
        stack.push(i)
    }
    return res
};