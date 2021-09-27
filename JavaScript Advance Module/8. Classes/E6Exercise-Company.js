class Company {
    // TODO: implement this class...
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        let employee = {};
        employee.name = name;
        employee.salary = salary;
        employee.position = position;

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`

    }


    bestDepartment() {

        let bestDepartment = Object.entries(this.departments).sort((a, b) => (b[1].reduce((acc, el) => acc + el, 0) / b[1].length) - (a[1].reduce((acc, el) => acc + el, 0) / a[1].length))[0];
        let averageSalary = bestDepartment[1].map(e => e.salary).reduce((acc, el) => acc + el, 0) / bestDepartment[1].length;
        let resultString = `Best Department is: ${bestDepartment[0]}\nAverage salary: ${averageSalary.toFixed(2)}\n`
        resultString += bestDepartment[1].sort((a, b) => {
            if ((b.salary - a.salary) === 0) {
              return a.name.localeCompare(b.name);
            }else{
                return b.salary-a.salary;
            }
        }).map(e => e.name + " " + e.salary + " " + e.position).join("\n");

        return resultString;
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
