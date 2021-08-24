function sameNumbersCheck(number) {

    let string = String(number).split('');
    let isSameNumber = true;

    let previousDigit = string[0];
    let sum = Number(string[0]);

    for (let i = 1; i < string.length; i++) {
        if (previousDigit !== string[i]) {
            isSameNumber = false;
        }
        
        sum+= Number(string[i]);
    }

 console.log(isSameNumber);
 console.log(sum);

}

sameNumbersCheck(1234);
