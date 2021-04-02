
/**
 * Two Types to create Objects in JavaScript:
 *      1. Object Literal
 *      2. Object Constructor
 */

/* Object Literal */

// // Empty Object Literals
// var person = {};
// // Add Properties
// person.firstName = "King";
// person.LastName = "Kochhar"
// // Add Methods
// person.getFullName = function () {
//     console.log(`${this.firstName} ${this.LastName}`)
// }
// // Accessing Object Literal
// console.log(person.firstName);
// console.log(person["LastName"])
// person.getFullName();

// Creating Object Literal with properties and methods
var person = {
    firstName: 'John',
    lastName: 'Smith',
    address: {
        houseNo: 101,
        city: 'Delhi'
    },
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
// Accessing Object Literal
console.log(person.firstName);
console.log(person["lastName"])
console.log(person.address.houseNo);
console.log(person.address.city);
person.getFullName();
