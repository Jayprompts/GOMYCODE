// A shop gives a discount to anyone aged 60 or over. Make a variable age. 
// If the person is 60 or older, print "You get a discount!". Otherwise print "No discount today."

// let age = 60

// if (age >= 60) {
//     console.log("You get a discount!")
// } else {
//     console.log("No discount today!")
// }


// Sort a person into an age group.
// Make a variable age. Print "Child" if under 13, "Teenager" if 13 to 19, "Adult" if 20 to 64, and "Senior" for 65 and above.

// let age = 65

// if (age <= 13){
//     console.log ("child")
// } else if (age <= 19) {
//     console.log ("Teenager")
// } else if ( age <= 64) {
//     console.log ("Adult")
// } else {
//     console.log ("Senior")
// }


// A traffic light tells the driver what to do.
// Make a variable light. Using a switch: "green" → "Go!", "yellow" → "Slow down.", "red" → "Stop!",and any other value → "Broken light."

let light = 2

switch (light){
    case 1:
        console.log("Green");
        break;
    case 2:
        console.log ("Red");
        break;
    case 3:
        console.log ("Yellow");
        break;
    default:
        console.log("Null")
}

// Find the LARGEST number in an array.
// Given let numbers = [4, 19, 7, 25, 11]; — loop through and find the biggest number, then print it. 
//Hint: start with a variable biggest = numbers[0], then each time you find a bigger one, update it.
//(Do not use Math.max.)

let numbers = [4, 19, 7, 25, 11];

let biggest = numbers[0]

for ( let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest)
        biggest = numbers[i]
}

console.log (biggest)

// Print a 3 x 3 grid of numbers.
// Use a nested loop to print three rows, each containing the numbers 1 to 3, like this:

for ( let row = 1; row <= 3; row++) {
   let line = "";
for ( let col = 1; col <= 4; col++ ){
    line = line + col + " ";
}
console.log (line)
}


for (let row = 1; row <= 3; row++) {
    let line = " ";
    for (let col = 1; col <= row; col++) {
        line = line + " " + "*";
    }
    console.log (line);
// }