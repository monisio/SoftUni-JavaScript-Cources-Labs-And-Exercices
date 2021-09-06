function createHero(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let hero = {};

        let [name, level, inventory] = array[i].split(' / ');

        hero['name'] = name;
        hero['level'] = Number(level);
        hero['items']= inventory? inventory.split(', '):[] ;



        resultArray.push(hero);
    }

    return JSON.stringify(resultArray);
}


//functional approach
//function solve(arr){
//
//     let heros = []
//
//     arr.map(x => x.split(' / '))
//
//     .map(x => heros.push({name: x[0], level: +x[1], items: x[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', ')}))
//
//
//
//     heros.sort((a, b) => a.level - b.level)
//
//     .map(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))
//
// }

createHero(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 ']
)