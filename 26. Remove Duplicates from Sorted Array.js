var removeDuplicates = function(nums) {
    let p=1
    let curr=nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==curr){
            curr=nums[i]
            nums[p]=nums[i]
            p++
        }
    }
    return p
};