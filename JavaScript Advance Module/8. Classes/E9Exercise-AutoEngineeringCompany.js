function solve(input) {
    let map = new Map();
    // turn input into Map<String, Map<String,Integer>>;
    input.forEach(e => {
        let tokens = e.split(" | ");

        if (!map.get(tokens[0])) {
            map.set(tokens[0], new Map());
        }
        let currentMakerMap = map.get(tokens[0]);
        if (!currentMakerMap.get(tokens[1])) {
            currentMakerMap.set(tokens[1], Number(tokens[2]));
        } else {
            currentMakerMap.set(tokens[1], currentMakerMap.get(tokens[1]) + Number(tokens[2]));
        }

    })

    Array.from(map).forEach(e=>{
        console.log(e[0]);

       Array.from(e[1]).forEach(entry=>console.log(`###${entry[0]} -> ${entry[1]}`));
    })


}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)