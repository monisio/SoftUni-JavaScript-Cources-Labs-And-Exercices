function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", requestContacts);
    document.getElementById("btnCreate").addEventListener("click", createContact);
    let url = "http://localhost:3030/jsonstore/phonebook"


    async function createContact() {
        let personElement = document.getElementById("person");
        let phoneElement = document.getElementById("phone");

        let newContact = {
            person: personElement.value,
            phone: phoneElement.value
        };

        personElement.value = null;
        phoneElement.value = null;

        try {
            let result = await fetch(url, {
                method: "Post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newContact)
            });
        }catch (error){
            console.log(error.message);
        }

    }


    async function requestContacts() {
        let contactsForm = document.getElementById("phonebook");
        Array.from(contactsForm.children).forEach(c => c.remove());

        let contacts = await fetch(url).then(body => body.json());

        Object.keys(contacts).forEach(key => {
            let e = contacts[key]
            let htmlElement = render(key, e.person, e.phone);
            contactsForm.appendChild(htmlElement);
        });


    }

    function render(id, name, phone) {

        let resultHtml = document.createElement("li");
        resultHtml.textContent = `${name}: ${phone}`
        resultHtml.setAttribute("data-id", id);


        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.id = "btnDelete";
        deleteBtn.addEventListener("click", deleteContact);

        resultHtml.appendChild(deleteBtn);

        return resultHtml;
    }

    async function deleteContact(event) {
        let liElement = event.currentTarget.parentElement;
        let currentLiId = liElement.getAttribute("data-id");
        let a = document.getElementById("phonebook");
        a.removeChild(liElement);

        await fetch(url + "/" + currentLiId, {
            method: "Delete"
        });


    }


}


attachEvents();

