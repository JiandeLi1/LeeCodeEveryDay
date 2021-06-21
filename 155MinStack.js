/**

Time complexity:O(1)
Space complexity: O(1)
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=[]
    this.min=[]
    this.l=0
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.l<=0){
        this.min.push(val)
    }else{
    (val<this.min[this.l-1] ? this.min.push(val) : this.min.push(this.min[this.l-1]))
    }
    this.l+=1
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.l>0){
        this.min.splice(this.stack.length-1,1)
        let last = this.stack.splice(this.l-1,1)
        this.l-=1
        return last
    }
    return
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length>0){
        return this.stack[this.l-1]
    }
    return
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.l>0){
     return this.min[this.l-1]
    }
    return
};

/** 
Time complexity:O(n)
Space complexity: O(1)

 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/*

var MinStack = function() {
    this.stack=[]
};


MinStack.prototype.push = function(val) {
    this.stack.push(val)
};


MinStack.prototype.pop = function() {
    if(this.stack.length>0){
        return this.stack.splice(this.stack.length-1,1)
    }
    return
};


MinStack.prototype.top = function() {
    if(this.stack.length>0){
        return this.stack[this.stack.length-1]
    }
    return
};


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