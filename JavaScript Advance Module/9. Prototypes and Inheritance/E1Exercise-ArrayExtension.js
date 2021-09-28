let array = [ 1,2,3,4,5,6];

(function solve(){
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, el) => acc + el, 0);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();


/*To test our program in the Judge, we need to wrap it in an IIFE, like it’s shown on the right.
 There is no return value, since the code execution results in functionality
being added to and existing object, so they take effect instantly. We are ready to submit our solution.
•	last() - returns the last element of the array
•	skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter
•	take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter
•	sum() - returns a sum of all array elements
•	average() - returns the average of all array elements
*/