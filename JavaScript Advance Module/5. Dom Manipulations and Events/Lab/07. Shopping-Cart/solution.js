function solve() {

    let productElements = document.querySelectorAll(".product");
    let resultTextArea = document.getElementsByTagName("textarea")[0];
    let basketObject = {};
    let checkOutIsPressed = false;
    if(checkOutIsPressed === true){
        return;
    }

    for (const productElement of productElements) {

        productElement.addEventListener("click", addToBasket);


    }

    function addToBasket(event) {
        if(checkOutIsPressed === true){
            return;
        }
        if (event.target.tagName.toLowerCase() !== "button") {
            return;

        }
        let productNode = event.currentTarget;

        let productName = productNode.querySelector(".product-title").textContent;
        let productPrice = Number(productNode.querySelector(".product-line-price").textContent);

        resultTextArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`

        basketObject[productName] = basketObject[productName]? basketObject[productName]+productPrice : productPrice;

    }

    let checkoutElement =  document.querySelector(".checkout");
    checkoutElement.addEventListener("click", checkOut)
    function checkOut(){

        if(checkOutIsPressed === true){
            return;
        }
        let productsAsString = Object.keys(basketObject).join(", ");
        let totalPrice = Object.values(basketObject).reduce((ecc,el)=>ecc+el,0);

        resultTextArea.textContent+=`You bought ${productsAsString} for ${totalPrice.toFixed(2)}.`

        checkOutIsPressed = true;
    }

}