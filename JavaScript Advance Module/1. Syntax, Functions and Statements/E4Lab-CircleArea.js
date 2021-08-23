function getCircleArea(num) {

    let output = '';

    if (typeof (num) == 'number') {
        let area = Math.pow(num, 2) * Math.PI;
        output = area.toFixed(2);
    } else {
        output = `We can not calculate the circle area, because we receive a ${typeof (num)}.`;
    }

    console.log(output);
}


getCircleArea(5);