/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let start = flowerbed[0] === 1 ? 0 : -2
    const len= flowerbed.length
    for(let i=1;i<len;i++){
        if(flowerbed[i]===1){
            if( i-start-1 >= 3){
                n-=(Math.ceil((i-start-1)/2)-1)
            }
            start=i
        }
    }
    //If No 1 in FB
    if(!flowerbed.includes(1)) n-=Math.ceil(len/2)
    
    //If the rest FB no 1, (len-1)-the last 1position/2
    if(start>=0 && start!=len-1) n-=Math.ceil((len-start-2)/2)
    
    return n <= 0 ? true: false
};