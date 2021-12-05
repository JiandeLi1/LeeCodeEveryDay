/**
 * @param {number[]} prices
 * @return {number}
 */
/*
We need to note the minPrice for each part, if a element is less than minPrice,
change minPrice to the element, if the element minus the minPrice less than the result
we have before, result=the element-minPrice.
*/

var maxProfit = function(prices) {
    let min= prices[0]
    let profit=0
    
    prices.forEach(item=>{
        //if price[i] < than min, means we can make profit for than, but
        //we can not sure than the this is the max profit, so we need to compare
        //the max profit before and the profit now
        //If the current profit is larger than the before max profit
        //This is the new profit
        //If min > than prices[i], prices[i] is new min, we need to 
        //do the compare for rest step and before max profit
        if(min<item){
            profit=Math.max(profit, item-min)
        }else{
            min=item
        }
       
    });
    
    return profit
};