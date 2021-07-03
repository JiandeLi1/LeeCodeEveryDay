/*
Time complexity=O(n)
Space complexity=O(n)
*/
var StockSpanner = function() {
    this.span=[] // store all stock prices
    this.res=[] // maximum number of consecutive days ()
               
};
/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count=1//includes itself
    let i=this.span.length-1
    while(i>=0 && price>=this.span[i]){
        const last=this.res.pop()
        count+=last
        i-=last
    }
    this.span.push(price)
    this.res.push(count)
    return count
};
/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */