function mathOperation(x, y, operand) {
    let result = 0;
    
    switch (operand) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '/': result = x / y; break;
        case '%': result = x % y; break;
        case '**': result = x ** y; break;
    }

    console.log(result);
}


mathOperation(3, 5.53, '*');