function sumTable() {
    let rows = document.querySelectorAll('tr  td:nth-of-type(2n)');
    let sum = 0;
    for (let i = 0; i < rows.length - 1; i++) {
        let currentRow = rows[i];

        sum += Number(currentRow.textContent);


    }
   let lastRow= rows[rows.length-1];
    lastRow.textContent=sum;

}