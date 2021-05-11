/**
 * @param {number[]} nums
 * @return {string}
 */
/*
Using javascript, we just make all ints to string, sort it.
However, some cases are tricky. If 1 and 10, 10 is larger than 1 in string, but
(1+10=110)>(10+1=101), look at this example, we know than wo can not just sort it.
We need to add two string , if a+b>b+a, a first, otherwise, b first.
After,the array sorted with this way. Using join('') make them together.
The last thing need to note, if an arr all elements are 0, that will return 0.
But the question told us, no nagetive number in arr, so if we sorted the arr, arr[0] 
is 0 , that means the arr only have 0, we just return 0, otherwise reeturn final 
result.
*/
var largestNumber = function(nums) {
    let result=nums.map(item=>{
       return item.toString();
    }).sort((a,b)=>{
        if(a+b>b+a){
            return -1;
        }else{
            return 1;
        }
    }).join('');
    return result[0]==0 ? "0": result;
};