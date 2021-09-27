class Contact {

    constructor(firstName, lastName, phone, email) {
        this.contactElement =this.createContactElement(firstName, lastName, phone, email);
        this.online = false;

    }

    set online(status) {
        this.online=status;
        if (this.online) {
            let current = document.getElementsByClassName("title")[0];
            current.className = "online";
        }

    }



    createContactElement(firstName, lastName, phone, email) {


        let contactElement = document.createElement("article");
        let divElementTitle = document.createElement("div");
        divElementTitle.className = "title"
        divElementTitle.textContent = `${firstName} ${lastName}`;
        let divElementTitleButton = document.createElement("button");
        divElementTitleButton.textContent = "\u2139";
        divElementTitleButton.addEventListener("click", handler);/// todo: write handler function
        divElementTitle.appendChild(divElementTitleButton);
        contactElement.appendChild(divElementTitle);
        let divElementInfo = document.createElement("div");
        divElementInfo.setAttribute("class", "info");
        divElementInfo.style.display = "none";
        let phoneSpanElement = document.createElement("span");
        phoneSpanElement.textContent = "\u260E" + phone;
        let emailSpanElement = document.createElement("span");
        emailSpanElement.textContent = "\u2709" + email;
        divElementInfo.appendChild(phoneSpanElement);
        divElementInfo.appendChild(emailSpanElement);
        contactElement.appendChild(divElementInfo);


        function handler(event) {
            let da = event.currentTarget.parentNode.parentNode;
            let hiddenElement = da.getElementsByClassName("info")[0];

            hiddenElement.style.display = hiddenElement.style.display === "none" ? hiddenElement.style.display = "block" : hiddenElement.style.display = "none";
        }

        return contactElement;
    }

    render(where) {
        document.getElementById(where).appendChild(this.contactElement);
    }

}


function generateContacts() {
    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));

   setTimeout(() => contacts[1].online = true, 2000);
}

/*<article>
    <div class="title">{firstName lastName}<button>&#8505;</button></div>
    <div class="info">
        <span>&phone; {phone}</span>
        <span>&#9993; {email}</span>
    </div>
</article>
*/