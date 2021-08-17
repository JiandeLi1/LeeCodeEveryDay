/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const len=nums.length
    if (len == 0 || !nums) return nums;
    let sorted=nums.slice()
    let counter=Array(len).fill(0)
    
    let map = nums.map((val, index)=>{
        return {'val':val, 'index':index}
    })

    var merge = function(arr) {
        if (arr.length == 1) {
            return arr
        }
        let mid = Math.floor(arr.length/2)
        let left = merge(arr.slice(0,mid));
        let right = merge(arr.slice(mid));
        
        let li = 0, ri = 0, count = 0, sorted = [];
        while (li < left.length ) {
            if (right[ri] && left[li].val > right[ri].val) {
                count++;
                sorted.push(right[ri++]);
            } else {
                counter[left[li].index]+=count;
                sorted.push(left[li++]);
            }
        }
        return [...sorted, ...right.slice(ri)];        
    }
    merge(map);
    return counter
}