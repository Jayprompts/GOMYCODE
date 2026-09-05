/* ============================================================
   JavaScript Functions Exercise
   ============================================================ */

/* ------------------------------------------------------------
   1. STRING MANIPULATION
   ------------------------------------------------------------ */

// 1.1 Reverse a string
// Split into characters, reverse the array, join back together.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 1.2 Count the number of characters in a string
function countCharacters(str) {
  return str.length;
}

// Optional variant: count only letters, ignoring spaces and punctuation.
function countLetters(str) {
  let count = 0;
  for (const char of str) {
    if (/[a-z]/i.test(char)) count++;
  }
  return count;
}

// 1.3 Capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word === "") return word; // handles double spaces
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

/* ------------------------------------------------------------
   2. ARRAY FUNCTIONS
   ------------------------------------------------------------ */

// 2.1 Find the maximum value in an array of numbers
function findMax(numbers) {
  if (numbers.length === 0) return undefined;

  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) max = num;
  }
  return max;
}

// 2.1 (bis) Find the minimum value in an array of numbers
function findMin(numbers) {
  if (numbers.length === 0) return undefined;

  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) min = num;
  }
  return min;
}

// 2.2 Sum of all elements in an array
function sumArray(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

// 2.3 Filter an array based on a given condition
// `condition` is a callback function that returns true or false.
function filterArray(array, condition) {
  const result = [];
  for (const element of array) {
    if (condition(element)) result.push(element);
  }
  return result;
}

/* ------------------------------------------------------------
   3. MATHEMATICAL FUNCTIONS
   ------------------------------------------------------------ */

// 3.1 Factorial of a number (n! = n * (n-1) * ... * 1)
function factorial(n) {
  if (n < 0) return undefined; // factorial is undefined for negatives
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 3.2 Check whether a number is prime
// A prime is a whole number > 1 divisible only by 1 and itself.
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  // Only test odd divisors up to the square root of n.
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// 3.3 Generate the Fibonacci sequence up to a given number of terms
// Each term is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, ...
function fibonacci(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];

  const sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

/* ------------------------------------------------------------
   TESTS / DEMONSTRATION
   ------------------------------------------------------------ */

console.log("--- String Manipulation ---");
console.log(reverseString("JavaScript"));            // tpircSavaJ
console.log(countCharacters("Hello World"));         // 11
console.log(countLetters("Hello World!"));           // 10
console.log(capitalizeWords("hello my dear world")); // Hello My Dear World

console.log("\n--- Array Functions ---");
const numbers = [12, 5, 8, 130, 44, 3];
console.log(findMax(numbers));   // 130
console.log(findMin(numbers));   // 3
console.log(sumArray(numbers));  // 202
console.log(filterArray(numbers, (n) => n > 10));     // [12, 130, 44]
console.log(filterArray(numbers, (n) => n % 2 === 0)); // [12, 8, 130, 44]

console.log("\n--- Mathematical Functions ---");
console.log(factorial(5));   // 120
console.log(factorial(0));   // 1
console.log(isPrime(7));     // true
console.log(isPrime(9));     // false
console.log(fibonacci(10));  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
