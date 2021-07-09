/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    /*
    TC : O(n^2)
    SC : O(1)
    */
    // let len=nums.length
    // for(let i=0;i<len;i++){
    //    let index=i
    //    if(nums.length===k) break
    //    while(index>0 && nums[index-1]>nums[index] && nums.length>k){
    //         nums.splice(index-1,1)//The time complexity for splice() is O(n)
    //        //Splice(i, n) is delete element in an array, i is index, n is how 
    //        //many elemt you wanna delete
    //        index-=1
    //     }
    //     i=index
    // }
    // while(nums.length>k){
    //     nums.pop()
    // }
    // return nums
    
    /*
    TC : O(n)
    SC : O(n)
    */
       let stack=[]
       const len=nums.length
       for(let i=0;i<len;i++){
       while(stack[stack.length-1]>nums[i] && 
             (stack.length+(nums.length-i-1)>=k)){
            stack.pop()
        }
           stack.push(nums[i])
    }
    stack.length=k
    return stack
}