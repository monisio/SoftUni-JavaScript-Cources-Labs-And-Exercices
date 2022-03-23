import {html} from "../../node_modules/lit-html/lit-html.js";
import {getDetails , deleteCar} from "../api/data.js";



const template= (car ,isOwner ,onDelete)=> html`
    <section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>
        ${isOwner? html`
            <div class="listings-buttons">
                <a href=${"/edit/"+car._id} class="button-list">Edit</a>
                <a @click=${onDelete} href=javascript:void(0) class="button-list">Delete</a>
            </div>`: ""}
    </div>
</section>`;

export async function detailsPage(ctx){
    let id = ctx.params.id;
    let result = await getDetails(id);
    let isOwner = sessionStorage.getItem("userId")===result._ownerId;

    ctx.render(template(result, isOwner, onDelete));


    async function onDelete(event){
        event.preventDefault();

        let confirmed = confirm("Are you sure, you want to delete this cal listing?")

        if(confirmed){
            await deleteCar(result._id);
            ctx.page.redirect("/all");
        }


    }

}