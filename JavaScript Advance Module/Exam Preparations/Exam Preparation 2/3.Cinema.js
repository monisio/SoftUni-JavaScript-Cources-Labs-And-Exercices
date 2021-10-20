let expect = require("chai").expect;

const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};



describe("Testing of Cinema class functionalities", () => {
    //show movies:
    //  empty array passed  - 'There are currently no movies to show.'
    // normal array passed - string joined by ", ";
    it("show movies message on empty array", () => {
        expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
    });

    it("show movies message on valid array", () => {
        expect(cinema.showMovies(["a", "b", "c", "d"])).to.equal("a, b, c, d");
    });

    //ticket price :
//valid type passed - price
//invalid type passed - 'Invalid projection type.'

    it("ticket price message on valid input", () => {
        expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
    });

    it("ticket price message on valid input", () => {
        expect(cinema.ticketPrice("Normal")).to.equal(7.50);
    });

    it("ticket price message on valid input", () => {
        expect(cinema.ticketPrice("Discount")).to.equal(5.50);
    });


    it("ticket price message on invalid input", () => {
        expect(()=>cinema.ticketPrice("Premi")).to.throw('Invalid projection type.');
    });


    //swap seats:
//passed not integer/ passed seat number less tha 0 / passed seat number more than 20 / fist seat === second seat / - "Unsuccessful change of seats in the hall."
// valid data passed - "Successful change of seats in the hall.";

    /*•	swapSeatsInHall(firstPlace, secondPlace)- A function that accepts two numbers
o	The function swaps the seat number in the cinema hall, when two numbers are submitted.
o	The exchange is not successful and the function returns "Unsuccessful change of seats in the hall." :
o	If one of the two numbers do not exist
o	The numbers are not integers
o	If one of the numbers is greater than the capacity of the hall – 20
o	Seats are less or equal of 0
o	Otherwise return: "Successful change of seats in the hall."
o	There is a need for validation for the input
*/

    it("swap seats message not integer passed ", () => {
        expect(cinema.swapSeatsInHall("string",20)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("swap seats message not integer passed ", () => {
        expect(cinema.swapSeatsInHall(20,"string")).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("swap seats message on undefined input 1", () => {
        expect(cinema.swapSeatsInHall(undefined, 2)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("swap seats message on 1 input", () => {
        expect(cinema.swapSeatsInHall(2)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("swap seats price message on undefined input 2", () => {
        expect(cinema.swapSeatsInHall( 2,undefined)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("swap seats price message non integer input 1", () => {
        expect(cinema.swapSeatsInHall( 2.22,4)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("swap seats price message non integer input 2", () => {
        expect(cinema.swapSeatsInHall( 4 ,2.22)).to.equal("Unsuccessful change of seats in the hall.");
    });


    it("swap seats price message  input 1 greater than 20", () => {
        expect(cinema.swapSeatsInHall( 21 ,1)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("swap seats price message  input 2 greater than 20", () => {
        expect(cinema.swapSeatsInHall( 1 ,21)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("swap seats price message  input 1 equal 0", () => {
        expect(cinema.swapSeatsInHall( 0 ,20)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("swap seats price message  input 2 equal 0", () => {
        expect(cinema.swapSeatsInHall( 20 ,0)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("swap seats price message  input 1 negative number", () => {
        expect(cinema.swapSeatsInHall( -1 ,20)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("swap seats price message  input 2 negative number", () => {
        expect(cinema.swapSeatsInHall( 20 ,-1)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("swap seats price message success", () => {
        expect(cinema.swapSeatsInHall( 20 ,1)).to.equal("Successful change of seats in the hall.");
    });

    it("swap seats message on correct data passed ", () => {
        expect(cinema.swapSeatsInHall(1,20)).to.equal("Successful change of seats in the hall.");
    });

    it("swap seats price message success", () => {
        expect(cinema.swapSeatsInHall( 5 ,4)).to.equal("Successful change of seats in the hall.");
    });

    it("swap seats same seat passed ", () => {
        expect(cinema.swapSeatsInHall(20,20)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("swap seats same seat passed ", () => {
        expect(cinema.swapSeatsInHall(20,20)).to.equal("Unsuccessful change of seats in the hall.");
    });



})