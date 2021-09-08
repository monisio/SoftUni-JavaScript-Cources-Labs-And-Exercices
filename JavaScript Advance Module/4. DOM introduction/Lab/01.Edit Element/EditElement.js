function editElement(htmlElement , matchString , replacer ) {


htmlElement.textContent = htmlElement.textContent.replace( RegExp(matchString, 'g') , replacer);

}