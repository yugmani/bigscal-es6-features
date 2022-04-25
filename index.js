// Import stylesheets
import './style.css';

// 1. Setting defaults for function parameters
// ------------------------------------------------

//Old way
/*
function findPower(val, exponent) {
  exponent = exponent || 2;
  console.log('Val: ', val);
  console.log('Exponent: ', exponent);
  let result = Math.pow(val, exponent);
  console.log(result);
}

findPower(3);   //9
findPower(2, 3);  //8
*/

//New way
function findPower(val, exponent = 2) {
  let result = Math.pow(val, exponent);
  console.log(result);
}

findPower(3); //9
findPower(3, undefined); //9
findPower(3, null); //1
findPower(3, 4); //81

// 2. Extracting Data from Arrays and Objects with Destructuring
// -------------------------------------------------------------

//Array Destructuring
const [first, second] = [100, 200];
console.log('First: ', first); //100
console.log('Second: ', second); //200

//Object Destructuring
const { a, b } = { a: 'alpha', b: 'beta' };
console.log('a: ', a);
console.log('b: ', b);

//Destructuring 3
function areaOfSquare(side) {
  const area = side * side;
  return [side, area];
}

const [side, area] = areaOfSquare(5);
console.log('Side: ', side); //5
console.log('Area: ', area); //25

//Destructuring 4
const myArray = ['HTML', 'CSS', 'JavaScript', 'Python'];
const [one, two, ...restElements] = myArray;

console.log(one); //HTML
console.log(two); //CSS
console.log(restElements); //["JavaScript", "Python"]

//Destructuring 5
const person = {
  name: 'Alex',
  gender: 'Male',
};

//Old way
/*
const name = person.name;
const gender = person.gender;
*/

//Using Destructuring in ES6
const { name, gender, title } = person;
console.log(name); //Alex
console.log(gender); //Male
console.log(title); //undefined

//Checking Array Values with Array includes() method
// ---------------------------------------------------

//to see if a value is included anyplace in the array.
const newArray = [10, 20, 30, 40, 50];

let index = newArray.indexOf(30);
console.log(index); //2

console.log(newArray.indexOf(25)); //-1

//Better way to check if a value is a member of array
let includesThis = newArray.includes(30);
console.log(includesThis); //true

console.log(newArray.includes(25)); //false

//Allowing Extra Arguments in Functions
// ------------------------------------------------------

//Rest parameters allow functions to collect additional arguments in addition to the ones they’ve already defined.

function findSum(arr) {
  return arr.reduce((prev, current) => prev + current);
}

const numbersArray = [1, 2, 3];
console.log(findSum(numbersArray)); //6

console.log(findSum([...numbersArray])); //6

const arr2 = [...numbersArray, 4, 5];
console.log(arr2); //[1, 2, 3, 4, 5]

// We can import or export variables, functions, classes, or any other component from/to different files and modules using the “import” or “export” declaration in a module.

import { num, logName } from './lib.js';
console.log('Num:', num); //101
console.log(logName('Noora')); //My name is Noora.

