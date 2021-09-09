function extract(content) {

    let contentElement = document.getElementById(content);

    let innerString = contentElement.textContent;
    let regex = /\((?<result>[A-Za-z ]+)\)/g;

    let iter = innerString.matchAll(regex);

    let result ='';

    for (const regExpMatchArray of iter) {
        result+=regExpMatchArray.groups.result+';';
    }


   return result;

    /*  const string = "something format_abc";
      const regexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
      const matches = string.matchAll(regexp);
  */


    ///\((?<result>[A-Za-z ]+)\)/g


}