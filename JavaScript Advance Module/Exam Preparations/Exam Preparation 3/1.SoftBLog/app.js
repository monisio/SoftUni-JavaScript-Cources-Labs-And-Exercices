function solve() {
    document.querySelector("button[class='btn create']").addEventListener("click", create);
    let formElement = document.querySelector("form");
    let archiveSection = document.querySelector(".archive-section ol");
    let postAreaElement = document.querySelector("main section");

    function create(event) {
        event.preventDefault()
        //console.log("clicked")
        let inputs = Array.from(formElement.querySelectorAll("input"));
        let textAreaElement = formElement.querySelector("#content")
        let creatorName = inputs[0].value;
        let title = inputs[1].value;
        let category = inputs[2].value;
        let content = textAreaElement.value;

        inputs.forEach(e => e.value = "");
        textAreaElement.value = "";

       /* if (creatorName.trim() === "" || title.trim() === "" || category.trim() === "" || content.trim() === "") {
            return
        }*/

        let mainPostElement = e("article", {},
            e("h1", {}, title),
            e("p", {}, "Category:", e("strong", {}, category)),
            e("p", {}, "Creator:", e("strong", {}, creatorName)),
            e("p", {}, content)
        )

        let deleteButton = e("button", {}, "Delete");
        deleteButton.classList.add("btn", "delete");
        let archiveButton = e("button", {}, "Archive");
        archiveButton.classList.add("btn", "archive");

        let buttonsDivElement = e("div", {}, deleteButton, archiveButton);
        buttonsDivElement.classList.add("buttons")

        mainPostElement.appendChild(buttonsDivElement);

        deleteButton.addEventListener("click", deleteFunction);
        archiveButton.addEventListener("click", archiveFunction)


        postAreaElement.appendChild(mainPostElement);


        function deleteFunction() {
            mainPostElement.remove();
            buttonsDivElement.remove();
        }

        function archiveFunction() {

            archiveSection.appendChild(e("li", {}, title));
            Array.from( archiveSection.childNodes).sort((a,b)=> a.textContent.localeCompare(b.textContent)).forEach(e=> {
                archiveSection.removeChild(e)
                archiveSection.appendChild(e)
            });

            deleteFunction()
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


