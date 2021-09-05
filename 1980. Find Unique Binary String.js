/**
 * @param {string[]} nums
 * @return {string}
 */

/*
Time complxity: O(n^2)
Spacee complexity: O(n)
*/
var findDifferentBinaryString = function(nums) {
  const len=nums.length
  let res=''
  const backTracking = (keeper) =>{
      if(keeper.length===len){
          if(!nums.includes(keeper)){
              res=keeper
          }
          return 
      }
      if(res===''){
        backTracking(keeper+'0')
        backTracking(keeper+'1')
      }
  }
  backTracking('')  
  return res
};