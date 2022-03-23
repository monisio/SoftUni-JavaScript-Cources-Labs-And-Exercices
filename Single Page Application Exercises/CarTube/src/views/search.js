import {html} from "../../node_modules/lit-html/lit-html.js";
import {getByYear} from "../api/data.js";


const template = (search, isInitial, cars) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>

        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button @click=${search} class="button-list">Search</button>
        </div>
        ${isInitial ? "" : containerTemplate(cars)}


    </section>`;


const resultTemplate = (car) => html`
    <div class="listing">
        <div class="preview">
            <img src="/images/audia3.jpg">
        </div>
        <h2>${car.brand + " " + car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href=${"/details/" + car._id} class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

const containerTemplate = (cars) => html`<h2>Results:</h2>
<div class="listings">
    ${cars.length === 0 ? html`<p class="no-cars"> No results.</p>` : cars.map(resultTemplate)}
    <!-- Display all records -->


    <!-- Display if there are no matches -->

</div>`;

export async function searchPage(ctx) {
    ctx.render(template(search, true));

    async function search(event) {
        event.preventDefault();

        let query = document.querySelector(".container input").value;
        if (!query || query.trim() === "") {
            return alert("Please enter year!");
        }

        let result = await getByYear(query);

        ctx.render(template(search, false, result))


    }

}