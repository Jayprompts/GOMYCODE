let n = 5;
let sum = 0;

for (let i = 1; i <= 5; i++) (
        sum = sum + i
)

console.log (sum)

//string concatenation

let salutation = "Hi" + " and" + " Goodbye!"
let salutation_2 = "Hello"
let result = salutation + salutation_2

console.log (salutation_2)
console.log(salutation)
console.log (result)
console.log (salutation_2 + " Mr Jayy")


// template literal strings - ${}


let senator_1 = "Ayo";
let topic_1 = "Baking";

console.log (`${senator_1} is a pro at ${topic_1} Cake`)

// "Boolean"

let on = true;
let off = false;

let n1 = 17.80;
let n2 = 23.89;
let z = n1 + n2;


console.log (n1 + n2)
console.log (z)


// type cohesion
// convert number from string to integer

let t = "8738"; // try for True, "Hello", 'A'
let v = typeof t;

console.log (`${v} is the data type of ${t}`)

//convert t to integer

t = Number(t);
console.log (typeof t);
console.log (t)

// js will cobert datatype to string first

let example = 1 + "1"
console.log (example);
console.log ( typeof (example));

// --

console.log([1,2] + "1");



// add more members to array and manipulate array -- 
// use .push() to add element to end of an array, 
// use .pop() to remove an element from end of an array, 
// use .unshift() to add element to the beginning of an array
// use .shift() to remove element from beginning of an array


let club = ["ManU", "Barca"];

// club.push ("Chelsea");

// club.pop ();

// club.unshift ("Dortmund");

// club.shift();

console.log (club)

// manipulation

console.log(club[1]). // to print an element in an array

club[1] = "Tottenham"

console.log (club)