
/**
 * JavaScript Data Types:
 *
 * 1. Primitive Data Types:
 *  String, Number, Boolean, Null and Undefined
 *
 * 2. Non-Primitive Data Types:
 *  Object, Date and Array
 *
 */

/** String Data Type */

// var fname = "King";
// var lname = 'Kochhar';
// var fullname = fname + ' ' + lname;
// console.log("First Name : " + fname);
// console.log("Last Name : " + lname);
// console.log("Full Name : " + fullname);
// console.log(`Welcome ${fname} ${lname}!!`)

/* Number Data Type */

// var num = 100;
// console.log(num);
// console.log(typeof (num));
// var num1 = new Number(1000);
// console.log(num1);
// console.log(typeof (num1));

// var n1 = new Number(100);
// var n2 = new Number(100);
// var n3 = 100;
// console.log(n1 == n2); // False, n1 and n2 are two different objects
// console.log(n1 == n3); // True
// console.log(n1 === n3); // False, checks for values, its type and memory.
// /* Operator (===) compares Number Object and not the values. */

/* Boolean Data Type */

// var isValid = true;
// console.log(isValid);
// isValid = false;
// console.log(isValid);

/* JS treats empty string, 0, undefined and null as false. Rest everthing is true. */
// var b1 = new Boolean("");
// var b2 = new Boolean(0);
// var b3 = new Boolean(undefined);
// var b4 = new Boolean(NaN);
// var b5 = new Boolean("Something");
// var b6 = new Boolean(1);
// console.log(b1);    // false
// console.log(b2);    // false
// console.log(b3);    // false
// console.log(b4);    // false
// console.log(b5);    // true
// console.log(b6);    // true

/* Null and Undefined Data Type: */
/**
 * null means absence of value.
 * undefined means lack of value.
 * null and undefined value evaluates to false in conditional statements.
 */

// var value;      // Lack of Value
// console.log(value);
// value = null;   // absence of Value
// console.log(value);
// var value = null;
// if (value)
//     console.log("Hi");
// else
//     console.log("Bye");




