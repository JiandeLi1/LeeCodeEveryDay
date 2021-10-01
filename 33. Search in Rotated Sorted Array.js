/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left=0;//The most left side
    let right=nums.length-1;//The most right side
    
    while(left<=right){//If left not less than right, left or right will change
        let p=left+Math.floor((right-left)/2);//The mid position between left and right
        if (nums[p]===target) return p;//If  nums[p] equal target, return it
        
        if(nums[p]>=nums[left]){
        //When left<=right, and nums[p]>=nums[left], there are 3 condition
        //1.nums[left]<=target<nums[p], target between nums[left] and nums[p], right become p-1
        //2.nums[left]<=target, nums[p]<target, p+1 becomes left
        //3.nums[left]>target>nums[p], p+1 becomes left
        //num[p] always >= nums[left], num[p]<target<nums[left] not exist
            if(nums[left]<=target&&nums[p]>target){
                right=p-1;
            }else{
                left=p+1
            }
        }else{
            //When left<=right, and nums[p]<nums[left], there are 3 condition
        //1.nums[left]>target, target<nums[p], target between nums[left] and nums[p], left become p+1
        //2.nums[left]<target, nums[p]<target, p-1 becomes right
        //3.nums[left]>target>nums[p], p-1 becomes right
        //num[p] always < nums[left], num[p]> target ,target<nums[left] not exist
            if(nums[left]>target&&nums[p]<target){
                left=p+1;
            }else{
                right=p-1
            }
            
        }
    }
    
    //If target not in array, return -1;
    return -1;
   
    
};