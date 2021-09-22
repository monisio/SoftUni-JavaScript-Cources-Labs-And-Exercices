function getArticleGenerator(articles) {

    let contentElement = document.getElementById("content");

    return function () {
        if(articles.length===0){
            return;
        }

        let current = articles.shift();

        let newArticle = document.createElement("article");

        newArticle.textContent = current;
        contentElement.appendChild(newArticle);


    }

}
