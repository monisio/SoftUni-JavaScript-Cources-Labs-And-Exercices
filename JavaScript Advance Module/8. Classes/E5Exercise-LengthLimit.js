class Stringer {

    constructor(string, lenght) {
        this.innerString = string;
        this.innerLength = lenght;
        this.lengthBelowZero();
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength-= length;
        this.lengthBelowZero();
    }

    lengthBelowZero() {
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString(){
        let output = "";
        if(this.innerString.length>this.innerLength){
            output+= this.innerString.substring(0, this.innerLength)+"...";
        }else{
            output= this.innerString;
        }
        return output;

    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
