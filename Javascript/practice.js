//Write a function showPrice(item, price) that prints "The item costs 500 naira" using whatever values are passed in. Call it twice with different items.

function showPrice (item) {
    console.log("The " + item + " costs 500 naira "+ ".")
}

showPrice ("Banana", "500 Naira")


// Q1. Sum of an array
// Write a function sumArray(numbers) that returns the total of all numbers in the array. Test it with [5,
// 10, 15, 20] (answer: 50).

const sumArray = (...numbers) => 
    let answer = 0;
    for { let num of numbers 
    {answer += num} 
}
    console.log(sumArray(2,3,4))



// Q2. Find maximum and minimum
// Write two functions, findMax(numbers) and findMin(numbers), that return the biggest and smallest
// numbers in an array. Do not use Math.max / Math.min — use a loop.
// Q3. Count the characters in a string
// Write a function countChars(text) that returns how many characters are in a string. Hint: a string has a
// .length too.
// Q4. Factorial
// Write a function factorial(n) that returns n × (n-1) × ... × 1. So factorial(5) is 120. Use a loop and
// a running total that starts at 1.
// Q5. Filter an array
// Write a function onlyBig(numbers) that returns a new array containing only the numbers greater than
// 10. Hint: make an empty array, loop, and push the ones that pass the if.