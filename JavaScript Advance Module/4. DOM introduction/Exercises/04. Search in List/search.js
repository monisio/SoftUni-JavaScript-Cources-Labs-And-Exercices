function search() {
    // TODO
    let searchWord = document.getElementById("searchText").value.trim();

    if(!searchWord){
        return;
    }

    let listElements = document.querySelectorAll("#towns li");
    let resultElement = document.getElementById("result");
    let arr = Array.from(listElements);

    //reset previous result
    arr.forEach(el=>{
        el.style.fontWeight= 'normal';
        el.style.textDecoration= 'none';
    } )


    let result =  arr.filter(e => e.textContent.includes(searchWord)).map(e => {
        e.style.textDecoration = 'underline';
        e.style.fontWeight = 'bold';
    }).length;
    resultElement.textContent= `${result} matches found`
    resultElement.style.display= 'inline';

    /*  for (const listElement of listElements) {
          let townName = listElement.textContent;
          if (townName === searchWord) {
              listElement.style.textDecoration = "underline";
              listElement.style.fontWeight= "bold";

          }


      }*/


}