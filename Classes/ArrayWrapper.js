// https://leetcode.com/problems/array-wrapper/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.arr=nums;
    
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.arr.reduce((acc,val)=>acc+val,0);
    
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.arr);
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
