/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res=[]
    nums1=new Set(nums1)
    nums2=new Set(nums2)
    let short = nums1.size<=nums2.size ? nums1 : nums2
    const long = nums1.size>nums2.size ? nums1 : nums2
    short.forEach(i=>{
        if(long.has(i)){
            res.push(i)
        }
    })
    return res
};