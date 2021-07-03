/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res=[]
    let len=nums1.length
    for(let i=0;i<len;i++){
        let index=nums2.indexOf(nums1[i])+1
        while(index<nums2.length){
            if(nums2[index]>nums1[i]){
                res[i]=nums2[index]
                break
            }else{
                index+=1
            }   
        }
        if(index>=nums2.length){
            res[i]=-1
        }
    }
    return res
};