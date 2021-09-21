function fibonator() {
    let num1 = 0;
    let num2 = 1;
    let firstCall = true;
    return function () {
        if (firstCall) {
            firstCall = false;
            return 1;
        }
        let prev = num2;
        num2 = num1 + num2
        num1 = prev;


        return num2;
    }
}


let fib = fibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
