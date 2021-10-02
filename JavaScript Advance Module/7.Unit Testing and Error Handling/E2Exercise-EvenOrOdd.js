let expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven function tests",()=>{
    it("test function with non-string parameter return undifined", ()=>{
        expect(isOddOrEven(4)).to.be.undefined;
    });

    it("test function to return even with even string passed",()=>{
        expect(isOddOrEven("karate")).to.be.equal("even");
    });

    it("test function to return odd with odd string passed",()=>{
        expect(isOddOrEven("kid")).to.equal("odd");
    });

});
