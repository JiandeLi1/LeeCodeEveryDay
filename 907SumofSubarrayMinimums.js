/**
 * @param {number[]} arr
 * @return {number}
 */
/*
Time complexity: O(n)
Space complexity: O(n)
*/

var sumSubarrayMins = function(arr) {
    let stack=[]
    const  BASE = BigInt(Math.pow(10, 9) + 7)
    let res = 0n, tmp = 0n;
    for (let i = 0; i < arr.length; i++) {
            let count = 1;
            while (stack.length && stack[stack.length-1][0] >= arr[i]) {
                let pop = stack.pop()
                count += pop[1]
                tmp -= BigInt(pop[0] * pop[1])
            }
            stack.push([arr[i], count]);
            tmp += BigInt(arr[i] * count);
            res += tmp;
            res %= BASE;
        }
 
        return res;
};