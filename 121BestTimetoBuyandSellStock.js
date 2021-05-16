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
    let result=0, minPrice=prices[0];
    prices.forEach((item)=>{
        (item-minPrice>result) && (result=item-minPrice);
        (item<minPrice) && (minPrice=item);
    })
    return result;
};