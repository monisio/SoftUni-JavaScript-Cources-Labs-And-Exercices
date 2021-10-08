function solution() {
    let mainElement = document.querySelector("main");
    mainElement.addEventListener("click", (event) => {
        event.target

    })

    fetch("http://localhost:3030/jsonstore/cookbook/recipes")
        .then((response) => response.json())
        .then((result) => {
            mainElement.children[0].remove();
            for (const key in result) {
                let element = render(result[key]);
                element.addEventListener("click", getDetailedInfo);
                mainElement.appendChild(element);
            }

        })

    function render(elementData) {

        let article = document.createElement("article");
        let divTitle = document.createElement("div");
        let titleH2 = document.createElement("h2");
        let divImage = document.createElement("div");
        let imageElement = document.createElement("img");
        article.className = "preview";
        article.id = elementData._id;
        divTitle.setAttribute("class", "title")
        titleH2.textContent = elementData.name;
        divImage.setAttribute("class", "small");
        imageElement.src = elementData.img;
        divTitle.appendChild(titleH2);
        divImage.appendChild(imageElement);
        article.appendChild(divTitle);
        article.appendChild(divImage);

        return article;

    }

    function getDetailedInfo(event) {
        let url = "http://localhost:3030/jsonstore/cookbook/details/" + event.currentTarget.id;
        let parent = event.currentTarget.parentElement;
         Array.from( parent.children).forEach(c => {
             if (c !== event.currentTarget) {
                 parent.removeChild(c);
             }
         });

        fetch(url).then(responce => responce.json()).then(resultObject => {

            let detailElement = renderDetails(resultObject);
            mainElement.appendChild(detailElement);
        })


    }

    function renderDetails(data) {
        let article = document.createElement("article")
        let h2Title = document.createElement("h2");
        h2Title.textContent = data.name;
        article.appendChild(h2Title);

        let div = document.createElement("div");
        div.className = "band";
        article.appendChild(div);

        let divInner = document.createElement("div");
        divInner.className = "thumb";
        div.appendChild(divInner);

        let img = document.createElement("img");
        img.src = data.img;
        divInner.appendChild(img);

        let divIngredients = document.createElement("div");
        divIngredients.className = "ingredients";
        div.appendChild(divIngredients);

        let h3 = document.createElement("h3");
        h3.textContent = "Ingredients";
        divIngredients.appendChild(h3);
        let ul = document.createElement("ul");

        data.ingredients.forEach(ingredient => {
            let liElement = document.createElement("li");
            liElement.textContent = ingredient;
            ul.appendChild(liElement);
        });

        divIngredients.appendChild(ul);

        let divDescription= document.createElement("div");
        divDescription.className= "description";
        article.appendChild(divDescription);

        let h3Description = document.createElement("h3");
        h3Description.textContent="Preparation:"
        divDescription.appendChild(h3Description);

        data.steps.forEach(s=>{
           let pElement = document.createElement("p");
           pElement.textContent=s;
           divDescription.appendChild(pElement);
        })


        return article;

    }


}




