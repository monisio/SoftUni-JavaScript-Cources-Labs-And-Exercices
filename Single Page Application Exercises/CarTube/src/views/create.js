import {html} from "../../node_modules/lit-html/lit-html.js";
import {createCar} from "../api/data.js";


const template = (onSubmit) => html`
    <section id="create-listing">
        <div class="container">
            <form @submit=${onSubmit} id="create-form">
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>

                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">

                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">

                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">

                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">

                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">

                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">

                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>`;


export async function createPage(ctx) {

    ctx.render(template(onSubmit));

    async function onSubmit(event) {

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


        let car = {
            brand: userInput.get("brand"),
            model: userInput.get("model"),
            description: userInput.get("description"),
            year: Number (userInput.get("year")),
            imageUrl: userInput.get("imageUrl"),
            price:Number( userInput.get("price"))
        }

        await createCar(car);
        ctx.page.redirect("/all");

    }

}