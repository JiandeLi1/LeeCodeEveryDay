/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
We use a dp to save the maximum score between index i to i+k (start at index 0, 
index 0 need to push to dp first), queuen to save the max score index at each k 
interval. To let us know which index in queue stored max score before each interval k,
we can use a loop to traverse the nums, while queue has element, and i < i-k (if i-k
>=the index stored max score, means new k interval is coming, old one left), we deletel 
the front element iin queue, renew thw dp, max sroce before add nums[i], than,while 
dp[i] is larger than dp last element (last element in dp always is newest max score  
in i-k interval), delete last element in queue, so, we can make sure the first element 
in queue alway are the max score index in i-k interval.

Finally, the last element is the max score in the last interval, also the result.


example,nums = [1,-1,-2,4,-7,3], k = 2
index     queue          dp                        
  0       [ 0 ]          [ 1 ]                  (init step)         
  1       [ 0, 1 ]       [ 1, 0 ]                  
  2       [ 0, 1, 2 ]    [ 1, 0, -1 ]
  3       [ 3 ]          [ 1, 0, -1, 4 ]        (new start)
  4       [ 3, 4 ]       [ 1, 0, -1, 4, -3 ]
  5       [ 5 ]          [ 1, 0, -1, 4, -3, 7 ] (end)
*/
var maxResult = function(nums, k) {
   let dp=[nums[0]];
   let q=[0];
   let len=nums.length;
   for(let i=1;i<len;i++){
       console.log(q,dp,i)
       while(q&&q[0]<i-k){
           q.shift();
       }
       dp[i]=dp[q[0]]+nums[i]
       console.log(q,dp)
       while(q&&dp[i]>=dp[q[q.length-1]]){
           q.pop();
       }
       console.log(q)
       q.push(i);
       console.log(q)
   }
    return dp[len-1];
};
