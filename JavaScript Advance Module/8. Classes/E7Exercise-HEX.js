let yourNumber = 12;

console.log(yourNumber.toString(2));

class Hex {

    constructor(value) {

        this.value = Number(value);

    };

    valueOf() {
        return this.value;
    };

    toString() {
        let result = this.value.toString(16);
        return "0x" + result.toUpperCase();
    };

    plus(number) {
        let input = number.valueOf() === undefined ? number : number.valueOf();
        return new Hex(this.value + input);
    };

    minus(number) {
        let input = number.valueOf() === undefined ? number : number.valueOf();
        return new Hex(this.value - input);
    };


    parse(input) {
        return parseInt(input, 16);
    }

}


/*•	plus({number}) This function should add a number or Hex object and return a new Hex object.
•	minus({number}) This function should subtract a number or Hex object and return a new Hex object.
•	parse({string}) Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.
*/