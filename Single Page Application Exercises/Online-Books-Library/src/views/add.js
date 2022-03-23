import {html} from "../../node_modules/lit-html/lit-html.js";
import {createBook} from "../api/data.js";



const template = (onSubmit) => html`
    <section id="create-page" class="create">
        <form @submit=${onSubmit} id="create-form" action="" method="">
            <fieldset>
                <legend>Add new Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                </p>
                <input class="button submit" type="submit" value="Add Book">
            </fieldset>
        </form>
    </section>`;


export async function addPage(ctx) {

    ctx.render(template(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        let userInput = new FormData(event.target);


        if (Array.from(userInput.values()).some(v => v.trim() === "")) {
            alert("All fields are required")
            return
        }

        let book = {
            title: userInput.get("title"),
            description: userInput.get("description"),
            imageUrl: userInput.get("imageUrl"),
            type: userInput.get("type")
        }

        await createBook(book);
        ctx.page.redirect("/");

    }

}