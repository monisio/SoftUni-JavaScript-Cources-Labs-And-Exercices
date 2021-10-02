let expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe("lookUpChar function tests",()=>{
    it(" function return undefined when non string passed",()=>{
        expect(lookupChar(2,3)).to.be.undefined;
    });

    it("function return undefined when double index passed",()=>{
        expect(lookupChar("test string",3.3)).to.be.undefined;
    });

    it("function return undefined when integer as string is passed as index",()=>{
        expect(lookupChar("test string", "3")).to.be.undefined;
    });

    it("function returns undefined when both incorrect parameters passed",()=>{
       expect(lookupChar(2,"string")).to.be.undefined;
    });


    it("function detects index is on upper bounds",()=>{
         expect(lookupChar("test string", 11)).to.equal("Incorrect index");
    });
    it("function detects index out of upper bounds",()=>{
        expect(lookupChar("test string", 100)).to.equal("Incorrect index");
    });

    it("function detects index out of lower bound",()=>{
        expect(lookupChar("test string", -1)).to.equal("Incorrect index");
    });

    it("function return character when correct arguments passed",()=>{
        expect(lookupChar("test string",3)).to.equal("t");
    });

    it("function return character when correct arguments on edge",()=>{
        expect(lookupChar("test string",10)).to.equal("g");
    });

    it("function with empty string", ()=>{
        expect(lookupChar("",4)).to.equal("Incorrect index")
    });
});