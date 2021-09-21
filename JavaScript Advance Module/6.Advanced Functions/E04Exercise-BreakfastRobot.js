function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let robot = {
        prepare: {
            apple: (quantity) => {
                ingredients["carbohydrate"] -= 1 * quantity;
                ingredients["flavour"] -= 2 * quantity;
               return  getMessage();
            },

            lemonade: (quantity) => {
                ingredients["carbohydrate"] -= 10 * quantity;
                ingredients["flavour"] -= 20 * quantity;
              return getMessage();
            },
            burger: (quantity) => {
                ingredients["carbohydrate"] -= 5 * quantity;
                ingredients["fat"] -= 7 * quantity;
                ingredients["flavour"] -= 3 * quantity;
               return  getMessage();

            },
            eggs: (quantity) => {
                ingredients["protein"] -= 5 * quantity;
                ingredients["fat"] -= 1 * quantity;
                ingredients["flavour"] -= 1 * quantity;
               return getMessage();

            },
            turkey: (quantity) => {
                ingredients["protein"] -= 10 * quantity;
                ingredients["carbohydrate"] -= 10 * quantity;
                ingredients["fat"] -= 10 * quantity;
                ingredients["flavour"] -= 10 * quantity;
              return getMessage();

            },
        },

        restock: (item, quantity) => {
            ingredients[item] += quantity;
            return "Success";
        },

        report: () => {
           return  Object.entries(ingredients).map(e => e[0] + "=" + e[1]).join(" ");
        }


    }

    function getMessage() {
        let result = Object.entries(ingredients).filter(e => e[1] <= -1)
        if (result.length === 0) {
            return "Success";
        } else {
            result.forEach(e => ingredients[e[0]]=0);
            let missing = result[0][0];
            return `Error: not enough ${missing} in stock`;
        }


    }

    return function (input) {
        let [command, data, value] = input.split(" ");
        let message = "";
        if (!data) {
            message = robot[command]();
        } else if (command === "restock") {
            message = robot[command](data, Number(value));
        } else {

            message = robot[command][data](Number(value));

        }

        return message;
    }
}


let manager = solution();

console.log(manager("restock protein 100"));
console.log (manager ("prepare turkey 4"));
console.log(manager("report"));



