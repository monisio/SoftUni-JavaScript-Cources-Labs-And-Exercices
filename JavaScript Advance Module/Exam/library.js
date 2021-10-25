let expect = require("chai").expect;


const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

/*•	calcPriceOfBook (nameOfBook, year) - A function that accepts a string and a number:
o	The function calculates the price of the book depending on the year of publication
o	The standard price of the book is 20 BGN
o	If the year of publication is less than or equal to 1980, there is a 50% percent discount from the standard price
o	The function calculated price of the book and return: `Price of {nameOfBook} is {price}`
o	=You need to validate the input, if nameOfBook is not a string, or the year is not an integer number, throw an error: "Invalid input"
*/

describe("Testing Library function", () => {

    describe("testing calculate Price of book", ()=>{

        //errors on invalid input
        it("invalid name string ", () => {
            expect(()=>library.calcPriceOfBook(2, 2000)).to.throw("Invalid input");
        });

        it("invalid date as double ", () => {
            expect(()=>library.calcPriceOfBook("stephen king", 20.11)).to.throw("Invalid input");
        });

        it("invalid date as string ", () => {
            expect(()=>library.calcPriceOfBook("stephen king", "2000")).to.throw("Invalid input");
        });


        //ok input on lowerBorder
        it("date on lower border = 1980", () => {
            expect(library.calcPriceOfBook("stephen king", 1980)).to.equal(`Price of stephen king is 10.00`);
        });

        it("date on lower border < 1980", () => {
            expect(library.calcPriceOfBook("stephen king", 1979)).to.equal(`Price of stephen king is 10.00`);
        });


        it("normal date without discount 2000", () => {
            expect(library.calcPriceOfBook("stephen king", 2000)).to.equal(`Price of stephen king is 20.00`);
        });
        it("normal date without discount 1981", () => {
            expect(library.calcPriceOfBook("stephen king", 1981)).to.equal(`Price of stephen king is 20.00`);
        });
    })


    /*•	findBook (booksArr, desiredBook)- A function that accepts an array and string:
o	The array includes all available books in the library (["Troy", "Life Style", "Torronto", etc.])
o	=If the length of the booksArr array is zero, throw an error in the following format: "No books currently available"
o	The function checks whether the submitted string desiredBook is present in the array booksArr.
o	If present in the array, the function return: "We found the book you want."
o	Otherwise the function return: "The book you are looking for is not here!"
o	There is no need for validation for the input, you will always be given an array and string
*/

    describe("testing find book ", ()=>{

        it("invalid input empty array ", () => {
            expect(()=> library.findBook([], "Troy")).to.throw("No books currently available");
        });
        //no need of checking the input always valid params will be passed!????


        it("valid input array passed", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal("We found the book you want.");
        });

        it("missing book searched", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "stephen king")).to.equal("The book you are looking for is not here!");
        });


    })


    /*•	arrangeTheBooks (countBooks) - A function accept a number:
o	You need to validate the input, if the countBooks is not an integer number, or is a negative number, throw an error: "Invalid input"
o	The library has 5 shelves, each shelf can hold 8 books. Distribute the books on the shelves
o	If all the books are arranged on the shelves, return: "Great job, the books are arranged."
o	Otherwise, if no space has been reached, return: "Insufficient space, more shelves need to be purchased."
*/

    describe("testing arrange books ", ()=>{
        /// invalid params passed
        it("invalid input double count ", () => {
            expect(()=> library.arrangeTheBooks(2.21)).to.throw("Invalid input");
        });
        it("invalid input negative number ", () => {
            expect(()=> library.arrangeTheBooks(-1)).to.throw("Invalid input");
        });


        it("valid input on upper border 40  passed", () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
        it("valid input on 39 passed", () => {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        });

        it("valid input on 41 passed", () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        });


    })

});