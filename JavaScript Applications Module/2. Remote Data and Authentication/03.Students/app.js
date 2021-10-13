document.getElementById("submit").addEventListener("click", createStudent);


async function createStudent(e) {
    e.preventDefault();

    let form = new FormData(document.getElementById("form"));
    let firstName = form.get("firstName");
    let lastName = form.get("lastName");
    let faculty = form.get("facultyNumber");
    let grade = form.get("grade");


    if (firstName && lastName && faculty && grade) {

        let student = {
            firstName: firstName,
            lastName: lastName,
            facultyNumber: faculty,
            grade: grade
        }
        try {
            let result = await fetch("http://localhost:3030/jsonstore/collections/students", {
                method: "Post",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(student)

            });
            Array.from(document.querySelector("#results tbody").childNodes).forEach(data => data.remove());

            await fetch("http://localhost:3030/jsonstore/collections/students").then(body => body.json()).then(result => Object.keys(result).forEach(key => render(result[key])));


        } catch (error) {
            console.log(error.message);
        }

    }

    function render(student) {
        let table = document.querySelector("#results tbody")

        let mainRow = document.createElement("tr");

        let name = document.createElement("td");
        name.textContent = student.firstName;

        let lastName = document.createElement("td");
        lastName.textContent = student.lastName;

        let faculty = document.createElement("td");
        faculty.textContent = student.facultyNumber;

        let grade = document.createElement("td")
        grade.textContent = student.grade;
        mainRow.appendChild(name);
        mainRow.appendChild(lastName);
        mainRow.appendChild(faculty);
        mainRow.appendChild(grade);
        table.appendChild(mainRow);
    }

}
