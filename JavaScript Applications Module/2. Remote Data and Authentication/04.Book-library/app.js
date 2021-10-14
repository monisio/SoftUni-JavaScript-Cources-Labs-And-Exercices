document.getElementById("loadBooks").addEventListener("click", getBooks);
let formTitle = document.querySelector("form h3")
let buttonTitle = document.querySelector("form button")
let url = "http://localhost:3030/jsonstore/collections/books";

async function getBooks(event) {
    let tableBody = document.querySelector("table tbody");
    Array.from(tableBody.getElementsByTagName("td")).forEach(e => e.remove());
    let books = await fetch(url).then(body => body.json());
    Object.entries(books).forEach(b => {
        tableBody.appendChild(renderBook(b[0], b[1].author, b[1].title))
    })
}


function renderBook(id, author, titile) {
    let editButton = createElement("button", undefined, "Edit");
    let deleteButton = createElement("button", undefined, "Delete");
    editButton.addEventListener("click", editHandler);
    deleteButton.addEventListener("click", deleteHandler);

    let buttonsTd = createElement("td", undefined, editButton, deleteButton);
    buttonsTd.dataset.id = id;
    let authorTd = createElement("td", undefined, author);
    let titleTd = createElement("td", undefined, titile);

    return createElement("tr", undefined, titleTd, authorTd, buttonsTd);
}

 function editHandler(event) {
    let id = event.currentTarget.parentElement.dataset.id;
    formTitle.textContent = "Edit Form"
    buttonTitle.textContent = "Save"
    buttonTitle.dataset.id = id;

    buttonTitle.addEventListener("click", change);



}

async function change(event) {
    event.preventDefault();
    let id = event.currentTarget.dataset.id;
    event.currentTarget.dataset.id = "";
    await requestChangeCreateEntry("Put", id);
  //  event.currentTarget.removeEventListener("click", change);
    formTitle.textContent = "Form"
    buttonTitle.textContent = "Submit"
}

async function deleteHandler() {

}


async function requestChangeCreateEntry(method, id) {

    let formData = new FormData(document.querySelector("form"));
    let title = formData.get("title");
    let author = formData.get("author");
    let update = {}
    if (title) {
        update.title = title
    }
    if (author) {
        update.author = author
    }
    if (method === "Post" && (!title || !author)) {
        return;
    }
        let targetEntryId= (id)? ("/" + id):"";
    await fetch(url + targetEntryId, {
        method: method,
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(update),
    });
}

function createElement(tag, attributes, ...params) {
    let element = document.createElement(tag);
    let firstValue = params[0];
    if (params.length === 1 && typeof (firstValue) !== "object") {
        if (["input", "textarea"].includes(tag)) {
            element.value = firstValue;
        } else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }
    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }
    return element;
}



