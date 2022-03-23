import {html} from "../../node_modules/lit-html/lit-html.js";
import {getAllBooks} from "../api/data.js";


const template = (data) => html`
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        <!-- Display ul: with list-items for All books (If any) -->
        ${data.length>0 ? html`
            <ul class="other-books-list">${data.map(singleBookTemplate)}</ul>` : html`<p class="no-books">No books in
            database!</p>`}
        <!-- Display paragraph: If there are no books in the database -->
    </section>`


const singleBookTemplate = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href=${"/details/"+book._id}>Details</a>
    </li>`;


export async function dashboardPage(ctx) {
    ctx.setNavBar();
    let data = await getAllBooks();
    ctx.render(template(data));

}