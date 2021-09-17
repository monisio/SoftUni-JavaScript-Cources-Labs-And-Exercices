function create(words) {
      let divContentElement = document.getElementById("content");

   for (const word of words) {
      let newDivElement = document.createElement("div");
      let newPElement = document.createElement("p");
      newPElement.textContent= word;
      newPElement.style.display="none";
      newDivElement.appendChild(newPElement);
      newDivElement.addEventListener("click",reveal);

      divContentElement.appendChild(newDivElement);

   }


   function reveal(event){
      event.currentTarget.querySelector("p").style.display="block";
   }

}