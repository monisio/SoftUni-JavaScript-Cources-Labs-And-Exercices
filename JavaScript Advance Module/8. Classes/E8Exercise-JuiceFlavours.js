function solve(input) {
    let inputMaterials = new Map();
    let resultMap = new Map();
    // turn input into Map;
    for (const material of input) {
        let tokens = material.split(" => ");
        inputMaterials.has(tokens[0]) ?
            inputMaterials.set(tokens[0], inputMaterials.get(tokens[0]) + Number(tokens[1]))
            : inputMaterials.set(tokens[0], Number(tokens[1]));

        Array.from(inputMaterials).forEach(e=> {
            if ((e[1] % 1000) !== e[1]) {
                resultMap.set(e[0], Math.trunc(e[1] / 1000))
                e[1] = e[1] % 1000;
            }
        })
    }




    Array.from(resultMap).forEach(e=> console.log(e[0]+" => "+e[1]))




}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

);