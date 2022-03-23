import {html} from "/node_modules/lit-html/lit-html.js"
import {deleteFurniture, getItemById} from "../api/data.js";

let detailsTepmplate = (data,onDelete,isOwner) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${data.img}/>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${data.make}</span></p>
            <p>Model: <span>${data.model}</span></p>
            <p>Year: <span>${data.year}</span></p>
            <p>Description: <span>${data.description}</span></p>
            <p>Price: <span>${data.price}</span></p>
            <p>Material: <span>${data.material}</span></p>
            ${isOwner ? html`
                <div>
                    <a href=${`/edit/`+ data._id} class="btn btn-info">Edit</a>
                    <a @click=${onDelete} href=”” class="btn btn-red">Delete</a>
                </div>` : ""
            }
        </div>
    </div>`


export async function detailsPage(ctx) {
    let data = await getItemById(ctx.params.id);
    let isOwner = sessionStorage.getItem("userId") === data._ownerId;

    ctx.render(detailsTepmplate(data,onDelete,isOwner));

    async function onDelete(event){
       event.preventDefault();

        const confirmed = confirm("Are you sure you want to delete this item?");
        if(confirmed){
           await deleteFurniture(data._id);
           ctx.page.redirect("/");
        }
    }


    console.log("details page", ctx.params.id);
}