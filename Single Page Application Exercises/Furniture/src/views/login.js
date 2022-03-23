
import {html} from "/node_modules/lit-html/lit-html.js"
import {login} from "../api/data.js";

const loginTemplate = (onSubmit, errorMsg ,invalidEmail, invalidPassword) => html`
   <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
             ${errorMsg? html`<div class="form-group"><p style="color: red">${errorMsg}</p></div>`: ""}
        <form @submit =${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class=${"form-control "+ (invalidEmail? "is-invalid":"") } id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class=${"form-control "+ (invalidPassword? "is-invalid":"") } id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`





export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit, "",false,false));



    async function onSubmit(event){
        event.preventDefault();

        let loginData = new FormData(event.target);

        let userEmail = loginData.get("email").trim();
        let password = loginData.get("password").trim();


        if(userEmail==="" ){
            ctx.render(loginTemplate(onSubmit, "Username is required!",userEmail==="", password===""    ))
            return
        }
        if ( password===""){
            ctx.render(loginTemplate(onSubmit,"Password is required!",userEmail==="",password===""))
            return
        }
        try{
            await login(userEmail,password);
        }catch (error){
            ctx.render(loginTemplate(onSubmit, error.message , true,true))
            return
        }


        ctx.setUserNavigation();
        ctx.page.redirect("/");
    }

    console.log("login page");
}



