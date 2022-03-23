import {html} from "../../node_modules/lit-html/lit-html.js";
import {getDetails, editBook} from "../api/data.js";


const template = (book, onSubmit) => html`
    <section id="edit-page" class="edit">
        <form @submit=${onSubmit} id="edit-form" action="#" method="">
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input"><input type="text" name="title" id="title" .value=${book.title}>
                </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                            <textarea name="description"
                                      id="description">${book.description}</textarea>
                        </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                            <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                        </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                            <select id="type" name="type" .value=${book.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>`;


export async function editPage(ctx) {

    let book = await getDetails(ctx.params.id);

    ctx.render(template(book,onSubmit));


    async function onSubmit(event) {
        event.preventDefault();

        let userInput = new FormData(event.target);

        if (Array.from(userInput.values()).some(e => e.trim() === "")) {
            alert("All fields are required!");
            return
        }

        let newBook = {

            title : userInput.get("title"),
            description: userInput.get("description"),
            imageUrl:userInput.get("imageUrl"),
            type: userInput.get("type")

        }


        await editBook(book._id,newBook)

        ctx.page.redirect("/details/"+book._id);

    }


}