window.addEventListener('load', solve)


function solve() {


    document.querySelector("#add").addEventListener("click", addFurniture);

    function addFurniture(event) {

        event.preventDefault();

        let inputs = {
            model:document.getElementById("model").value,
            year:Number(document.getElementById("year").value),
            price:Number(document.getElementById("price").value),
            description: document.getElementById("description").value,
        }


        if (inputs.model.trim() === "" || inputs.year < 0 || inputs.price < 0 || inputs.description.trim() === "") {
            return;
        }

      let kur= document.querySelector("form").children;
        Array.from(kur).forEach(c => c.value = "");
        let moreButton = e("button", {className: "moreBtn"}, "More Info")
        let buyButton = e("button", {className: "buyBtn"}, "Buy it")


        let newStoreElement = e("tr", {className: "info"},
            e("td", {}, inputs.model),
            e("td", {}, inputs.price.toFixed(2)),
            e("td", {}, moreButton, buyButton),)


        let hiddenTd = e("tr", {className: "hide"},
            e("td", {}, `Year: ${inputs.year}`),
            e("td", {colSpan: "3"},`Description: ${inputs.description}`)
        )

        let furnitureList = document.getElementById("furniture-list");


        buyButton.addEventListener("click", buy.bind(null, inputs.price, newStoreElement, hiddenTd));
        moreButton.addEventListener("click", moreInfoShow.bind(null, hiddenTd));
        furnitureList.appendChild(newStoreElement)
        furnitureList.appendChild(hiddenTd);

    }

    function buy(price, furnitureElement, hiddenElement) {
        furnitureElement.remove();
        hiddenElement.remove();
        let totalPriceTdElement = document.querySelector(".total-price");
        totalPriceTdElement.textContent = (price + Number(totalPriceTdElement.textContent)).toFixed(2);
    }

    function moreInfoShow(hiddenTd, event) {

        let moreLessButton = event.currentTarget;
        if (hiddenTd.style.display === "contents") {
            hiddenTd.style.display = "none";
            moreLessButton.textContent = "More info"
        } else {
            hiddenTd.style.display = "contents";
            moreLessButton.textContent = "Less Info";
        }
    }


    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item === "string" || typeof item === "number") {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }
}


