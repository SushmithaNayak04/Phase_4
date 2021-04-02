
/**
 * JavaScript Object Constructor
 */

// Creating Object Constructor
var person = new Object();
// Attache Properties and Methods
person.firstName = "Sarah";
person.lastName = "Bowling";
person.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}!!`);
}
// Access Object Constructor
console.log(person.firstName);
console.log(person["lastName"])
if (person.hasOwnProperty('age'))
    console.log(person.age);
person.getFullName();
console.log('-------------------------');
// Access Members of Objects:
for (var key in person)
    console.log(key)

