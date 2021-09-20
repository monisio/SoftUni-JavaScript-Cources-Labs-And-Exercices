function solve(area, vol, input) {
    let inputToArray = JSON.parse(input);

    let outputArray = [];

    for (const inputToArrayElement of inputToArray) {
        let currentResult= {
            area:area.call(inputToArrayElement),
            volume:volume.call(inputToArrayElement)
        }

        outputArray.push(currentResult);

    }


    return outputArray;
}






function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}

solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
);