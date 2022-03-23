import {html} from "/node_modules/lit-html/lit-html.js"

export const singleItemTemplate = (item)=> html`
    <div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${item.img} />
            <p>${item.make}</p>
            <footer>
                <p>Price: <span>${item.price}$</span></p>
            </footer>
            <div>
                <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>
`