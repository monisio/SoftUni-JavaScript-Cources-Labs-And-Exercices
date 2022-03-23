import {html} from "../../node_modules/lit-html/lit-html.js";
import { editCar, getDetails} from "../api/data.js";


const template = (car, onSubmit)=>html`<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;



export async function editPage(ctx){
       let car =  await getDetails(ctx.params.id);

       ctx.render(template(car, onSubmit))

    async function onSubmit(event){
           event.preventDefault();

           let userInput = new FormData(event.target);
         if( !(userInput.get("price")>-1&&userInput.get("year")>-1)){
            return alert("Year and price must be positive numbers");
        }

        let inputCheckArray = Array.from(userInput.values());
        console.log(inputCheckArray);


        if (inputCheckArray.length !== 6 || inputCheckArray.some(v => v.trim() === "")) {
            return alert("All fields must be filled!!!")
        }


        let editedCar = {
            brand: userInput.get("brand"),
            model: userInput.get("model"),
            description: userInput.get("description"),
            year: Number (userInput.get("year")),
            imageUrl: userInput.get("imageUrl"),
            price:Number( userInput.get("price"))
        }

        await editCar(car._id, editedCar)
        ctx.page.redirect("/details/"+car._id);


    }

}