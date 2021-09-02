function solve(array) {

    array.sort((a, b) => {
        if (a.length - b.length !== 0) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }

    });

  array.forEach(a=> console.log(a));

}

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

);