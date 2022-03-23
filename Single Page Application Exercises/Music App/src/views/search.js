import {html} from "../../node_modules/lit-html/lit-html.js";
import {searchByNameAlbum} from "../api/data.js";
import {singleAlbumCard} from "./catalog.js";

const template = ( results , onClick) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button @click=${onClick} class="button-list">Search</button>
        </div>

        <h2>Results:</h2>

        <!--Show after click Search button-->
        <div class="search-result">
            <!--If have matches-->
           ${results.length>0? results.map(singleAlbumCard): html`<p class="no-result">No result.</p>`}

            <!--If there are no matches-->
            
        </div>
    </section>
`;


export function searchPage(ctx){

    ctx.render(template([] ,onClick));
    let searchResults = document.querySelector(".search-result");
     searchResults.style.display="none";

    async function onClick(event){
        event.preventDefault();
       let searchField = document.getElementById("search-input");
       let query= searchField.value;

       if(query.trim()===""){
           return alert("Please enter search criteria!");
       }

        let results = await searchByNameAlbum(query)

        ctx.render(template(results,onClick));
        searchResults.style.display="inline-block";
    }


}