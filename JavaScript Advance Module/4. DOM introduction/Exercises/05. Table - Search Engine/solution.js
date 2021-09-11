function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    let tableElements = document.querySelectorAll("tbody tr");


    function onClick() {
        //   TODO:

        let searchWord = document.getElementById('searchField').value;
        if (!searchWord) {
            return;
        }

        let rows = Array.from(tableElements);
        rows.forEach(e => {
            e.className = '';
        })

        rows.forEach(e => {

            let element = Array.from(e.children);
            if (element.some(x => x.textContent.includes(searchWord))) {
                e.className = 'select';
            }

        });


    }


}