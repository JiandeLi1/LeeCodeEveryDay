/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue=[]
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.queue.length>0){
        return this.queue.splice(this.queue.length-1)[0]
    }
    return
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
     if(this.queue.length>0){
        return this.queue[this.queue.length-1]
    }
    return
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return (this.queue.length==0)
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */