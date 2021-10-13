
async function test() {

    const data = {title: "First Post", content: "Hello server!"};


    async function getData() {
        let data = await fetch("http://localhost:3030/jsonstore/advanced/articles/details").then(result=> result.json());


        console.log(result);

    }

    async function postData(data) {

        let result = await fetch("http://localhost:3030/jsonstore/advanced/articles/details", {
            method: "post",
            headers: {"Content type": "application/json"},
            body: JSON.stringify(data)
        });

        console.log(result);

    }

    async function updateData(id, data) {

        let result = await fetch("http://localhost:3030/jsonstore/advanced/articles/details" + id, {
            method: "put",
            headers: {"Content type": "application/json"},
            body: JSON.stringify(data)
        });
        console.log(result);
    }

    async function deleteData() {
        let result = await fetch("http://localhost:3030/articles" + id, {
            method: "delete",
        });

        console.log(result);
    }

    getData();
    postData();
    updateData();
    deleteData();
}

test();