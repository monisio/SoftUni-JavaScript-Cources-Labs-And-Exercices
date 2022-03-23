import {html} from "/node_modules/lit-html/lit-html.js"
import {editFurniture, getItemById} from "../api/data.js";

const editTemplate = (data, postEdit, isInvalidMake, isInvalidModel, isInvalidYear, isInvalidPrice, isInvalidImage, isInvalidDescription)=> html`<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${postEdit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class=${"form-control " + (isInvalidMake ? "is-invalid" : "is-valid")} id="new-make" type="text" name="make" .value=${data.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class=${"form-control " + (isInvalidModel ? "is-invalid" : "is-valid")} id="new-model" type="text" name="model" .value=${data.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class=${"form-control " + (isInvalidYear ? "is-invalid" : "is-valid")} id="new-year" type="number" name="year" .value=${data.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class=${"form-control " + (isInvalidDescription ? "is-invalid" : "is-valid")} id="new-description" type="text" name="description" .value=${data.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class=${"form-control " + (isInvalidPrice? "is-invalid" : "is-valid")} id="new-price" type="number" name="price" .value=${data.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class=${"form-control " + (isInvalidImage? "is-invalid" : "is-valid")} id="new-image" type="text" name="img" .value=${data.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" .value=${data.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`

export async function  editPage(ctx){
     const data =  await getItemById(ctx.params.id);
     ctx.render(editTemplate(data, postEdit));

    async function postEdit(event){
         event.preventDefault();

         const inputData = new FormData(event.target);
         let make = inputData.get("make") ? inputData.get("make").trim() : "";
         let model = inputData.get("model")? inputData.get("model").trim(): "";
         let year = Number(inputData.get("year")? inputData.get("year").trim():"");
         let description = inputData.get("description")? inputData.get("description").trim():"";
         let price = Number(inputData.get("price")? inputData.get("price").trim():"");
         let img = inputData.get("img")? inputData.get("img").trim():"";
         let material = inputData.get("material")? inputData.get("material").trim():"";

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
             ctx.render(editTemplate(data, postEdit, isInvalidMake,isInvalidModel,isInvalidYear,isInvalidPrice,isInvalidImage,isInvalidDescription))
         } else {
             let newData = {
                 make,
                 model,
                 year,
                 description,
                 price,
                 img,
                 material
             }
             await editFurniture(ctx.params.id ,newData);
             ctx.page.redirect("/details/"+ctx.params.id);
         }


     }


    console.log("edit page", ctx.params.id);
}