let expect = require("chai").expect;

let sum =require("../functionForTest").sum;
let divide = require("../functionForTest").divide;

describe("Test of testing function with Mocha",()=>{
    it( "test is working", ()=>{
        expect(sum(12,2)).to.equal(14);
    });
})