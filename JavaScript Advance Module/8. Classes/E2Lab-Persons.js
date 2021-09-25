
const Person = require("./E1Lab-Person");

function getPersons() {

    let array = [];


    array.push(new Person("Anna", "Simpson", 22, "anna@yahoo.com"))
    array.push(new Person("SoftUni"));
    array.push(new Person("Stephan", "Johnson", 25))
    array.push(new Person("Gabriel",	"Peterson",	24,	"g.p@gmail.com"));

    return array;
}
    console.log(getPersons());