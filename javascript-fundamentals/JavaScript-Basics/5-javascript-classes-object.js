
/*
function Employee() {
    this.firstName = "James";
    this.lastName = "Bond";
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var emp1 = new Employee();
console.log("First Name : " + emp1.firstName);
console.log("Last Name : " + emp1.lastName);
console.log(emp1.getFullName());

var emp2 = new Employee();
console.log("First Name : " + emp2.firstName);
console.log("Last Name : " + emp2.lastName);
console.log(emp2.getFullName());
*/

/*
function Employee() {
    this.firstName = "unknown";
    this.lastName = "unknown";
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var emp1 = new Employee();
emp1.firstName = "Bhawna";
emp1.lastName = "Gunwani";
console.log("First Name : " + emp1.firstName);
console.log("Last Name : " + emp1.lastName);
console.log(emp1.getFullName());

var emp2 = new Employee();
emp2.firstName = "King";
emp2.lastName = "Kochhar";
console.log("First Name : " + emp2.firstName);
console.log("Last Name : " + emp2.lastName);
console.log(emp2.getFullName());
*/

function Employee(fname, lname) {
    this.firstName = fname || "unknown";
    this.lastName = lname || "unknown";
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var emp1 = new Employee("King", "Kochhar");
console.log("First Name : " + emp1.firstName);
console.log("Last Name : " + emp1.lastName);
console.log(emp1.getFullName());

var emp2 = new Employee("John", "Smith");
console.log("First Name : " + emp2.firstName);
console.log("Last Name : " + emp2.lastName);
console.log(emp2.getFullName());

var emp3 = new Employee();
console.log("First Name : " + emp3.firstName);
console.log("Last Name : " + emp3.lastName);
console.log(emp3.getFullName());