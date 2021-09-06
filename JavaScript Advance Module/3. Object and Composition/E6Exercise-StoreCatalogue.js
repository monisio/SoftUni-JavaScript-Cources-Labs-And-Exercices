function solve(array) {
    let result = {};

    for (let i = 0; i < array.length; i++) {
        let [name, price] = array[i].split(' : ');
        let char = name[0];

        if (!result.hasOwnProperty(char)) {
            result[char] = {};
        }

        result[char][name] = price;


    }
    let object = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    for (const entry of object) {
        console.log(entry[0]);
        Object.entries(entry[1]).sort((a, b) => a[0].localeCompare(b[0])).forEach(e => console.log("  " + e[0] + ": " + e[1]))
    }


}


solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)