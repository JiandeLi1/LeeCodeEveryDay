/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /*
    //two pass
     let p=0
    let len = nums.length
    for(let i=0;i<len;i++){
        if(nums[i]!==0){
            nums[p]=nums[i]
            p++
        }
    }
    for(let i=p;i<len;i++){
        nums[i]=0
    }
    */
    
    //one pass
    let p=0
    let len = nums.length
    for(let i=0;i<len;i++){
        if(nums[i]===0){
            p++
        }else{
            let t=nums[i]
            nums[i]=0
            nums[i-p]=t
        }
    }
};