class Restaurant {

    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }

    loadProducts(products) {
        let result = [];

        products.forEach(p => {
            let product = p.split(" ");
            let productName = product[0];
            let productQuantity = Number(product[1]);
            let totalPrice =  Number(product[2]);
            if (this.budgetMoney >= totalPrice) {
                this.stockProducts[productName] = this.stockProducts[productName]
                    ? this.stockProducts[productName] + productQuantity
                    : productQuantity
                this.budgetMoney -= totalPrice;
                result.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {

                result.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }

        });
        this.history = this.history.concat(result);
        return result.join("\n");

    }

    addToMenu(meal, neededProducts, price) {
        let current = {};
        let output = "";
        if (!this.menu[meal]) {
            current["products"] = neededProducts.map(l => l.split(" ")).reduce((obj, element) =>{
                obj[element[0]] = element[1]
                return obj;
            } , {});
            current["price"] = Number(price);
            this.menu[meal] = current;
            let countOfMenuItems = Object.keys(this.menu).length;
            output = `Great idea! Now with the ${meal} we have ${countOfMenuItems} ${(countOfMenuItems === 1 ? "meal" : "meals")} in the menu, other ideas?`

        } else {
            output = `The ${meal} is already in the our menu, try something different.`
        }
        return output;
    }

    showTheMenu() {
        let output = [];


        for (const outputKey in this.menu) {
            output.push(`${outputKey} - $ ${this.menu[outputKey].price}`)
        }

        return output.length === 0 ? "Our menu is not ready yet, please come later..." : output.join("\n");

    }

    makeTheOrder(meal) {
        let menuMeal = this.menu[meal]

        if (!menuMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let productsNeeded = menuMeal["products"];

        let haveProducts = true;
        for (const productName in productsNeeded) {
            let needed = productsNeeded [productName];
            let available = this.stockProducts[productName];
            if (needed <= available) {
                this.stockProducts[productName] = available - needed;
            } else {
                haveProducts = false;
                break;
            }
        }

        if(haveProducts){
            this.budgetMoney+= menuMeal["price"];
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${menuMeal["price"]}.`;

        }else{
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
    }


}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));




