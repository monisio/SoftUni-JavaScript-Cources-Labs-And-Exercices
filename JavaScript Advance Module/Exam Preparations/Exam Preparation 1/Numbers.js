let expect = require("chai").expect;


const numbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

//sumNumbers function :
// type of number 1 is not number - return undefined
// type of number 2 is not number - return undefined
// sum returns sum of numbers if both inputs are ok
// sum works with double as input
describe("Testing sumOfNumbers function", () => {
    it("type of input num 1 is string", () => {
        expect(numbers.sumNumbers("string", 2)).to.be.undefined;
    });
    it("type of input num 2 is string", () => {
        expect(numbers.sumNumbers(2, "string")).to.be.undefined;
    });

    it("sum returned is correct", () => {
        expect(numbers.sumNumbers(2, 2)).to.equal("4.00");
    });

    it("type of is double", () => {
        expect(numbers.sumNumbers(2.23, 2)).to.equal("4.23");
    });


});


// numberChecker function :
// throws error if passed input is not a number done
// returns odd if number is odd
// return odd when number as string is passed
// return even if number is even
// return even when number as string passed
// what is returned when passed number is double?

describe("Testing numberChecker function", () => {
    it("throw error if input is string", () => {
        expect(() => numbers.numberChecker("string")).to.throw(Error, "The input is not a number!");
    });

    it("return odd when odd number passed", () => {
        expect(numbers.numberChecker(3)).to.equal("The number is odd!");
    });

    it("return odd when odd number as string  passed", () => {
        expect(numbers.numberChecker("3")).to.equal("The number is odd!");
    });

    it("return even when even number passed", () => {
        expect(numbers.numberChecker(4)).to.equal("The number is even!");
    });

    it("return even when even number as string passed", () => {
        expect(numbers.numberChecker("4")).to.equal("The number is even!");
    });
    it("return even when odd when double as string passed", () => {
        expect(numbers.numberChecker("1.1")).to.equal("The number is odd!");
    });
});


//averageSumArray function:
//returns NaN if passed string instead of array
//test regular input functionality
describe("Testing averageSumOfArray function", () => {
    it("test not array input passed to function ", () => {
        expect( numbers.averageSumArray("string")).to.be.NaN;
    });
    it("test not array input passed to function ", () => {
        expect( numbers.averageSumArray([1,2,3,4,5,6,7])).to.be.NaN;
    });
});