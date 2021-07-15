/**
 * initialize your data structure here.
 */

const swap=(nums, i, j)=>{
    const temp=nums[i]
    nums[i]=nums[j]
    nums[j]=temp
}
const MaxHeapify=(nums,i)=>{
    const n=nums.length
    if(i>=n) return
    const i1=2*i+1
    const i2=2*i+2
    let max=i
    if(i1<n && nums[i1]>nums[max]){
        max=i1
    }
    if(i2<n && nums[i2]>nums[max]){
        max=i2
    }
    if(max != i){
        swap(nums, max, i)
        MaxHeapify(nums, max)
    }
}
const MinHeapify=(nums,i)=>{
    const n=nums.length
    if(i>=n) return
    const i1=2*i+1
    const i2=2*i+2
    let min=i
    if(i1<n && nums[i1]<nums[min]){
        min=i1
    }
    if(i2<n && nums[i2]<nums[min]){
        min=i2
    }
    if(min != i){
        swap(nums,min, i)
        MinHeapify(nums,min)
    }
}

var MedianFinder = function() {
    this.maxList=[]
    this.minList=[]
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(!this.minList.length && !this.maxList.length ){
        this.minList.push(num)
        return
    }else if(this.minList.length>this.maxList.length){
        if(num>this.minList[0]){
            this.maxList.unshift(this.minList.shift())
            this.minList.push(num)
            const mx=Math.floor((this.minList.length-1)/2)
            for(let i=mx;i>=0;i--){
              MinHeapify(this.minList,i)
            }
        }else{
            this.maxList.push(num)
            const mi=Math.floor((this.maxList.length-1)/2)
            for(let i=mi;i>=0;i--){
                 MaxHeapify(this.maxList,i)
            }       
        }
         }else if(this.minList.length===this.maxList.length){
        if(num>this.maxList[0]){
            this.minList.push(num)
            const mx=Math.floor((this.minList.length-1)/2)
            for(let i=mx;i>=0;i--){
              MinHeapify(this.minList,i)
            }
        }else{
            this.minList.unshift(this.maxList.shift())
            this.maxList.push(num)
            const mi=Math.floor((this.maxList.length-1)/2)
            for(let i=mi;i>=0;i--){
                 MaxHeapify(this.maxList,i)
            } 
        }  
    }
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return (this.maxList.length+this.minList.length)%2==0 ?
           (this.maxList[0]+this.minList[0])/2 : this.minList[0]
};
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */