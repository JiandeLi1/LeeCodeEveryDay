/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
time complexity: O(KlogN)
space complexity: O(1)
*/
var findKthLargest = function(nums, k) {
     let n=nums.length
    const swap=( i, j)=>{
        const temp=nums[i]
        nums[i]=nums[j]
        nums[j]=temp
    }
    const heapify=(i)=>{
        if(i>=n) return
        const i1=2*i+1
        const i2=2*i+2
        let max=i
        if(i1<n && nums[i1]>nums[max]){
            max=i1
        }
        if(i2<n && nums[i2]>nums[max]){
            max=i2
        }
        if(max != i){
            swap( max, i)
            heapify(max)
        }
    }
    const heapSort=()=>{
    const m=Math.floor((nums.length-1)/2)
    for(let i=m;i>=0;i--){
        heapify(i)
    } 
    }
    let res=0
    for(let i=0;i<k;i++){
       heapSort()
       res=nums.shift() 
    }
    return res
};