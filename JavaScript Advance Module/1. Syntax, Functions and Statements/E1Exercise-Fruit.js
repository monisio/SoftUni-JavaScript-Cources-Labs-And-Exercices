function calculatePrice(fruitType, weight , pricePerKilo ){

        

        let totalPrice = (weight/1000) * pricePerKilo;

       let output= `I need $${totalPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitType}.`;

       return output;
}


console.log(calculatePrice('apple', 1563, 2.35));