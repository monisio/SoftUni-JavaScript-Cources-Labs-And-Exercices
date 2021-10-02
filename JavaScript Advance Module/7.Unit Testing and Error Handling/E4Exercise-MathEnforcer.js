let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", ()=>{
    describe("addFive function test",()=>{
        it("function returns undefined if non number passed",()=>{
            expect(mathEnforcer.addFive("string")).to.be.undefined;
        });
        it("function returns argument number plus 5",()=>{
           expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it("function works with negative numbers",()=>{
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        })
        it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });

    describe("subtractFive function test",()=>{
        it("function returns undefined if non number passed",()=>{
            expect(mathEnforcer.subtractTen("string")).to.be.undefined;
        });
        it("function returns correct value when correct arguments passed",()=>{
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });

        it("function works with negative numbers",()=>{
            expect(mathEnforcer.subtractTen(-11)).to.equal(-21);
        });
        it("should return correct result for floating point parameter", function () {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        });
    });
    describe("sum function test",()=>{

        it("function returns undefined",()=>{
            expect(mathEnforcer.sum("test",1)).to.be.undefined;
        });

        it("function returns undefined",()=>{
            expect(mathEnforcer.sum(1,"test")).to.be.undefined;
        });

        it("function works with negative numbers",()=>{
            expect(mathEnforcer.sum(-1,-5)).to.equal(-6);
        });


        it("should return correct result for floating point parameters", function () {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
        })
    });

})
