/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
/*
Greedy
we set the buy is first element, than mean we buy the first stock 
if the next element make us profit, we sell it, formula:
Now price - the price we buy - fee, as what I siad before, we imagine we bought the 
first stock, we ready paid for than, so means Now profit = price + paid-fee

if the next element make us profit, we sell it, formula:
Now price - the price we buy - fee, as what I siad before, we imagine we bought the 
first stock, we ready paid for than, so means Now profit = price + paid-fee, only the
 new profit larger than per profit, the selling will appear.

But before we know how we paid, we need to do comparion for each price, we find any
 stock.
 if profit- curr price> last paid,means we find the new lower price, change the paid to
  curr price.
*/
var maxProfit = function(prices, fee) {
    let len = prices.length, profit = 0, paid = -prices[0]
    for (let i = 1; i < len; i++) {
        //If selling is profit, sell
        profit = Math.max(profit, paid + prices[i] - fee)
        //If find lower price, choose it
        paid= Math.max(paid, profit - prices[i])
    }
    return profit
};
