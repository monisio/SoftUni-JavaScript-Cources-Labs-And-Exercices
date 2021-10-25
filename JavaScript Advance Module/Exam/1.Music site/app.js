window.addEventListener('load', solve);

function solve() {

    let inputForm = document.querySelector(".container-text form");
    let allSongContainer = document.querySelector(".all-hits-container");
    let savedSongsContainer = document.querySelector(".saved-container");
    let likesSection = document.querySelector("#total-likes");
    document.querySelector("#add-btn").addEventListener("click", addSong);


    function addSong(event) {
        event.preventDefault();
        //console.log("add clicked")
        let genre = inputForm.querySelector("#genre").value;
        let name = inputForm.querySelector("#name").value;
        let author = inputForm.querySelector("#author").value;
        let date = inputForm.querySelector("#date").value;


        Array.from(inputForm.childNodes).forEach(n => n.value = "");

        if (genre.trim() === "" || name.trim() === "" || author.trim() === "" || date.trim() === "") {
            return;

        }
        document.createElement("img").se


        let newSong = e("div", {className: "hits-info"},
            e("img", {src: "./static/img/img.png"},),
            e("h2", {}, `Genre: ${genre}`),
            e("h2", {}, `Name: ${name}`),
            e("h2", {}, `Author: ${author}`),
            e("h3", {}, `Date: ${date}`),
        );

        let saveButton = e("button", {className: "save-btn"}, "Save song");
        let likeButton = e("button", {className: "like-btn"}, "Like song");
        let deleteButton = e("button", {className: "delete-btn"}, "Delete");


        saveButton.addEventListener("click", saveSong);
        likeButton.addEventListener("click", likeSong);
        deleteButton.addEventListener("click", deleteSong);

        newSong.appendChild(saveButton);
        newSong.appendChild(likeButton);
        newSong.appendChild(deleteButton);


        allSongContainer.appendChild(newSong);
        console.log("OK");

        function likeSong(event) {
            let likesString = likesSection.querySelector("p");
            let likesCount = Number(likesString.textContent.split(" ")[2]) + 1;
            likesString.textContent = `Total Likes: ${likesCount}`;

            event.currentTarget.disabled = true;
        }

        function deleteSong(event) {
            event.currentTarget.parentElement.remove();
        }


        function saveSong(event) {
           console.log("in save function")
            allSongContainer.removeChild(newSong);
            newSong.removeChild(saveButton);
            newSong.removeChild(likeButton);

            savedSongsContainer.appendChild(newSong);

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