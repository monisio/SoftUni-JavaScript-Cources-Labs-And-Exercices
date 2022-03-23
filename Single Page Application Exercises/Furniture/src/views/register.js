import {html} from "/node_modules/lit-html/lit-html.js"
import {register} from "../api/data.js";

const registerTemplate = (onSubmit, errorMsg ,invalidEmail, invalidPassword, invalidRepass) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                ${errorMsg? html`<div class="form-group"><p style="color: red">${errorMsg}</p></div>`: ""}
                
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${"form-control " + (invalidEmail? "is-invalid":"")} id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${"form-control " + (invalidPassword? "is-invalid":"")} id="password" type="password" name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class=${"form-control " + (invalidRepass? "is-invalid":"")} id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register"/>
            </div>
        </div>
    </form>
`





export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));



    async function onSubmit(event){
        event.preventDefault();

        let registerData = new FormData(event.target);

        let userEmail = registerData.get("email").trim();
        let password = registerData.get("password").trim();
        let rePass = registerData.get("rePass").trim();

        if(userEmail===""|| password===""|| rePass===""){
            ctx.render(registerTemplate(onSubmit, "All fields are required!",userEmail==="", password==="" ,rePass===""   ))
            return
        }
        if ( password!==rePass){
            ctx.render(registerTemplate(onSubmit,"Entered repeat password doesn't match",false,true,true))
            return
        }

        await register(userEmail,password);
        ctx.setUserNavigation();
        ctx.page.redirect("/");
    }

    console.log("register page");
}