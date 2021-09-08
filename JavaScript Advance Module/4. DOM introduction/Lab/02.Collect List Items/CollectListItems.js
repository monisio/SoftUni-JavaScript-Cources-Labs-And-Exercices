function extractText() {
    // TODO
  let items =  document.getElementById('items').getElementsByTagName("li");

    let result = '';

    for (const row of items) {
        result+= row.innerText+'\n';

    }

    document.getElementById('result').value= result;


}