// https://leetcode.com/problems/calculator-with-method-chaining/description/?envType=study-plan-v2&envId=30-days-of-javascript

class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result = this.result + value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result = this.result - value;
        return this;

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result = this.result * value;
        return this;

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0)
            throw new Error("Division by zero is not allowed");
        this.result = this.result / value;
        return this;

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;

    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.result;

    }
}
