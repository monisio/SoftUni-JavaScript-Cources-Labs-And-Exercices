import {html} from "/node_modules/lit-html/lit-html.js"
import {createFurniture} from "../api/data.js";


let registerTemplate = (create, isInvalidMake, isInvalidModel, isInvalidYear, isInvalidPrice, isInvalidImage, isInvalidDescription) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${create}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class=${"form-control " + (isInvalidMake ? "is-invalid" : "is-valid")} id="new-make"
                           type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class=${"form-control " + (isInvalidModel ? "is-invalid" : "is-valid")} id="new-model"
                           type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class=${"form-control " + (isInvalidYear ? "is-invalid" : "is-valid")} id="new-year"
                           type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class=${"form-control " + (isInvalidDescription ? "is-invalid" : "is-valid")}
                           id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class=${"form-control " + (isInvalidPrice? "is-invalid" : "is-valid")} id="new-price"
                           type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class=${"form-control " + (isInvalidImage? "is-invalid" : "is-valid")} id="new-image"
                           type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create"/>
            </div>
        </div>
    </form>
`


export async function createPage(ctx) {
    ctx.render(registerTemplate(create));

    document.querySelectorAll("form input").forEach(e => e.classList.remove("is-valid"))

    async function create(event) {
        event.preventDefault();

        const inputData = new FormData(event.target);
        let make = inputData.get("make") ? inputData.get("make").trim() : "";
        let model = inputData.get("model")? inputData.get("model").trim(): "";
        let year = Number(inputData.get("year")? inputData.get("year").trim():"");
        let description = inputData.get("description")? inputData.get("description").trim():"";
        let price = Number(inputData.get("price")? inputData.get("price").trim():"");
        let img = inputData.get("img")? inputData.get("img").trim():"";
        let material = inputData.get("material")? inputData.get("material"):"";

        let isInvalidMake = false;
        let isInvalidModel = false;
        let isInvalidYear = false;
        let isInvalidDescription = false;
        let isInvalidPrice = false;
        let isInvalidImage = false;

        if (make === "" || make.length < 4) {
            isInvalidMake = true;
        }
        if (model === "" || isInvalidModel.length < 4) {
            isInvalidModel = true;
        }
        if (isNaN(year) || !Number.isInteger(year) || year < 1950 || year > 2050) {
            isInvalidYear = true;
        }
        if (description === "" || description.length < 10) {
            isInvalidDescription = true;
        }
        if (isNaN(price) || price <= 0) {
            isInvalidPrice = true;
        }
        if (img === "") {
            isInvalidImage = true;
        }
        if (isInvalidMake || isInvalidModel || isInvalidYear || isInvalidDescription || isInvalidPrice || isInvalidImage) {
            ctx.render(registerTemplate(create, isInvalidMake,isInvalidModel,isInvalidYear,isInvalidPrice,isInvalidImage,isInvalidDescription))
        } else {
            let data = {
                make,
                model,
                year,
                description,
                price,
                img,
            }

            if (material) {
                data.material = material;
            }

            await createFurniture(data);


            ctx.page.redirect("/");
        }

    }


    console.log("create page");


}