function solve(input) {
    let internalCollection = [];


    let methods = {
        add: function (string) {
            internalCollection.push(string);
        },
        remove: function (string) {
            internalCollection = internalCollection.filter(e => e !== string);
        },
        print: function () {
            console.log(internalCollection.join(","));
        }

    }


    for (let i = 0; i < input.length; i++) {
        let [command, string] = input[i].split(" ");

        methods[command](string);
    }


}


// function solve(input) {
//
//     let processor = listProcessor();
//     for (let i = 0; i < input.length; i++) {
//         let [command, string] = input[i].split(" ");
//
//        processor[command](string);
//     }
//
//
// }

solve( ['add hello', 'add again', 'remove hello', 'add again', 'print'])