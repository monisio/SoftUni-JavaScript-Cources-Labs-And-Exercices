function solve() {
    //TODO...
    let text = document.getElementById("text").value.toLowerCase().split(" ");
    let namingConvention = document.getElementById("naming-convention").value;
    let result = '';


    if (namingConvention === "Camel Case") {
        result += text[0];
        for (let i = 1; i < text.length; i++) {
            result += text[i].charAt(0).toUpperCase() + text[i].slice(1);
        }
    } else if (namingConvention === "Pascal Case") {

        for (let i = 0; i < text.length; i++) {
            result += text[i].charAt(0).toUpperCase() + text[i].slice(1);
        }


    } else {
        result = 'Error!';
    }

    document.getElementById("result").textContent = result;

}