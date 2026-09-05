// Arrow functions
function plusTwo(num) {
  return num + 2;
}
// assign it to a const, remove the name from `function`
const plusThree = function(num) {
  return num + 2;
};

//  delete the word `function`, add => after the brackets
const plusFour = (num) => {
  return num + 2;
};

const plusFive = (num) => num + 2;
console.log(plusTwo(67));
const greetings = () => console.log("Hello World!");

// const greetings = () => {
//   console.log("Hello World!");
//   console.log("How are you?");
// };

// const greetings = (name, age) => `Hello ${name}, you are ${age}!`;
// console.log(greetings("mubarak", "15"));

// const printArgs = (...arguments) => console.log(arguments);
// printArgs(1, 2, 3);

// Exercise
// Write a function named calculateSquare() that's used to calculate the area and perimeter of a square shape.
// The function accepts one parameter: the side of the square.
// The formula to calculate the area is side * side, and the formula to calculate the perimeter is 4 * side.
// The output shows the size of the size, the area, and the perimeter as follows:
// The square side is 8
// The area of the square is 64
// The perimeter of the square is 32

// objects in javascript
// An object is a special data type that allows you to store more than one value, just like an array.
// key:value

let array = ["victor", "Busari", "Precious", "Dickson", "Mr ifeanyi"];

let bookTitle = "JavaScript Introduction";
let bookAuthor = "Nathan Sebhastian";

// let myBook = ["JavaScript Introduction", "Nathan Sebhastian"];+++

// let myBook = {
//   title: "JavaScript Introduction",
//   author: "Nathan Sebhastian",
// };

let myBook = {
  title: "JavaScript Introduction",
  author: "Nathan Sebhastian",
  describe: function () {
    console.log(`Book title: ${this.title}`);
    console.log(`Book author: ${this.author}`);
  },
};

// console.log(myBook.title);
// console.log(myBook["title"]);
// console.log(myBook.author);
// console.log(myBook.describe)

// Add a new property
// add release year property
myBook.year = 2023;

// add publisher property
myBook["publisher"] = "CodeWithNathan";

// console.log(myBook);
// to check if a property or key exist
// console.log('publisher' in myBook);
// console.log('color' in myBook);

// delete myBook.author;