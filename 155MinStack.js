/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length>0){
        return this.stack.splice(this.stack.length-1,1)
    }
    return
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length>0){
        return this.stack[this.stack.length-1]
    }
    return
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length>0){
     return Math.min(...this.stack)
    }
    return
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */