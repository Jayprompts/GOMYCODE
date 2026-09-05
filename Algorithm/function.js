//FUNCTIONS


//function without return

function greet(x){
    // function body 
    console.log("abc" + x)
}
 
greet("y");


function salute(){
    console.log("I greet you")
}

salute()



function hail(person){
    console.log("I greet you " + person )
}

hail("mor oga")

//function with return

//EXAMPLE 1.0

function add(a, b){
    return a + b
}
let result = add(4,5)
console.log(result)

//EXAMPLE 2.0

function addition (a, b){
    let sum = a + b;
    return sum
}

console.log(addition(198,112))

//EXAMPLE 3.0

function subtraction (a, b){
    let sum = a - b;
    return sum
}

console.log(subtraction(198,112))


//CLASSWORK


//write a function showPrice(item, price) that prints "The item costs 500 naira" using whatever values
//are passed in. Call it twice with different items.

function showPrice (item, price){
    console.log(`I will buy my baby girl a ${item} worth ${price.toLocaleString()}`)
}

showPrice("Lambo", 500000000)
showPrice("Cooler of Amala", 50000)



//DEFAULT PARAMETER

function greetings(name = "Jayy"){
    console.log(`Hello, bad man ${name}!`)
    console.log(`you no guide gan!`)
}

greetings()


function greetings(action, name = "Jayy"){
    console.log(`Hello, bad man ${name}!`)
    console.log(`you no ${action} gan!`)
}

greetings("guide")
greetings ("guide", "Jossy")


// MORE USE OF FUNCTION

function checkAge (age) {
    if ( age > 19) {
        return `You may get a car license at ${age} years old`
    }
    return `You may not get a car license yet`
}

console.log(checkAge(20))
console.log(checkAge(13))



//REST PARAMETER

function add(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(add(2,3));
console.log(add(2, 3, 4, 5));
console.log(add(2, 3, 4, 5, 8, 9))


//ASSIGN CONST TO FUNCTION - 3 ways of writing a function.

function plusTwo (num){
    return num + 2
}
console.log(plusTwo(22))

//

const plusThree = function (num){
    return num + 3
}
console.log(plusThree(34))

//

const plusFour = (num) => num + 4;
console.log(plusFour(67))

// OR

const hails = (person) => console.log(`I greet you ${person}`)
hails("Jayy")

//OBJECTS IN FUNCTION

let myBook = {
    title: "Javascript Introduction",
    author: "Nathan Sebastian",
    describe: function() {
        console.log(`Book title: ${this.title}`);
        console.log(`Book author: ${this.author}`);
    }
}

console.log(myBook.title)
console.log(myBook.author)
myBook.describe();


//CALCULATE THE SIDE OF A SQUARE

function calculateSquare (side){
    const area = side * side;
    const perimeter = 4 * side;

    console.log(`The square side is ${side}`)
    console.log(`The area of the square is ${area}`)
    console.log(`The perimeter of the square is ${perimeter}`)
    return { side, area: side * side, perimeter: 4 * side };
}

calculateSquare(5)
console.log(calculateSquare(5))



//TERNARY OPERATOR
//CONDITION ? EXPRESSION1 : EXPRESSION2

//PROGRAM TO CHECK PASS OR FAIL

// let marks = prompt('Enter your marks');

// //check the condition
// let pass = 'Bang'
// let result_1 = (marks >= 40) ? pass : 'fail';
// console.log(`You ${result_1} the exam.`);

// SECOND EXAMPLE

let age_1 = 18
let result_5 = age_1 >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote'
console.log(result_5)