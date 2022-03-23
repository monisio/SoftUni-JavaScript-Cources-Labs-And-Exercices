import {html} from "/node_modules/lit-html/lit-html.js"
import {myFurniture} from "../api/data.js";
import {singleItemTemplate} from "./common.js";

const myTemplate = (data) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${data.map(singleItemTemplate)}
    </div>`



export async function myItemsPage(ctx) {
    const myItems = await myFurniture();
    ctx.render(myTemplate(myItems));


    console.log("my furniture page");
}