import {html} from "/node_modules/lit-html/lit-html.js"
import {getFurniture} from "../api/data.js";
import {singleItemTemplate} from "./common.js";

const dashboardTemplate = (data) => html`
    <div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${data.map(singleItemTemplate)}
</div>`




export async function dashboardPage(ctx) {
    //request data from server
    let data = await getFurniture();

    console.log("dashboard page");

    ctx.render(dashboardTemplate(data));
}