/**
 * @param {number} num
 * @return {number}
 */
/*
Time complexity: O(nlogn + n)
Space complexity: O(n)

If we find num[i] not is the largest number of subnumber,
exchange index i and the last index of the largest number of subnumber
*/
var maximumSwap = function(num) {
    let sortedNum=num.toString().split('')
    sortedNum.sort((a,b)=>b-a)
    num=num.toString().split('')

    for(let i=0;i<num.length;i++){
        if(num[i]!=sortedNum[i]){
            num[num.slice(i).lastIndexOf(sortedNum[i])+i]=num[i]
            num[i]=sortedNum[i]
            break
        }
    }
    return num.join('')
};