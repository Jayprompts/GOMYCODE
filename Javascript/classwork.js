/* ---------------------------------------------------------
   PART A — WARM UP
   --------------------------------------------------------- */

// A1. Print the exact message:  I am learning JavaScript

console.log ("I am learning javascript")

// A2. Print your own full name.
console.log ("Ekwealor Joshua Kosisochukwu")

// A3. Print these three lines using THREE separate console.log statements:
//     Line 1: your name
//     Line 2: your phone number
//     Line 3: GoMyCode Student
// your code here

console.log ("Ekwealor Joshua Kosisochukwu")
console.log ("08137645944")
console.log ("I am a Gomycode student")

/* ---------------------------------------------------------
   PART B — DECLARING VARIABLES
   --------------------------------------------------------- */



// B5. Now try this. Uncomment the two lines below, run the file,
//     and write down the error message you get. Then comment them
//     back so the rest of the file still runs.

// const CITY = "Lagos";
// CITY = "Abuja";

// THE ERROR I GOT: TypeError: Assignment to constant variable.
// WHY DID IT HAPPEN? because we tried to reassign the value of a constant variable.



/* ---------------------------------------------------------
   PART C — NAMING VARIABLES
   --------------------------------------------------------- */

// C1. Rewrite each of these names in camelCase.
//     Just fill in the answer in the comment — no code needed.

//     account number      ->  accountNumber   (example)
//     first name          ->  firstName
//     total price         ->  totalPrice
//     student phone number->  studentPhoneNumber
//     date of birth       ->  dateOfBirth


// C2. Rewrite the same four names in snake_case.

//     first name          ->  first_name
//     total price         ->  total_price
//     student phone number->  student_phone_number
//     date of birth       ->  date_of_birth


// C3. Three of the four variable names below are BAD.
//     Circle/mark the good one and write WHY the others are bad.

//     let x = "Chidinma";        // bad because ______________________
//     let studentName = "Chidinma";
//     let s n = "Chidinma";      // bad because the variable has space between s and n, it shouldnt be.
//     let a1 = "Chidinma";       // bad because ______________________



/* ---------------------------------------------------------
   PART D — DATA TYPES
   --------------------------------------------------------- */

// D1. Predict the output of EACH line before running.
//     Write your prediction in the comment beside it.

console.log(5 + 5);          // prediction: 10
console.log("5" + 5);        // prediction: 55
console.log("5" + "5");      // prediction: 55
console.log(10 + 2 + "3");   // prediction: 123
console.log("10" + 2 + 3);   // prediction: 1023

// D2. In your own words, what is the difference between  5  and  "5" ?
//     ANSWER: 5 is a number , likely a float
//             "5" is a character here, likely a string 


// D3. Create two variables:
//        priceOfRice  -> the number 85000
//        shopName     -> the text "Mile 12 Market"
//     Then print both of them.
// your code here

priceOfRice = 85000
shopName = "Mile 12 Market"

console.log (priceOfRice)
console.log (shopName)


/* ---------------------------------------------------------
   PART E — STRING CONCATENATION
   --------------------------------------------------------- */

// E1. Create three variables: firstName, middleName, lastName.
//     Join them into one variable called fullName, with a space
//     between each part. Print fullName.
// your code here

let firstName = " Joshua"
let middleName = " Kosisochukwu"
let lastName = "Ekwealor"
let fullName = lastName + firstName + middleName

console.log (fullName)

// E2. Create a variable town that holds "Yaba".
//     Print exactly this sentence, using concatenation:
//        I study at GoMyCode in Yaba
//     (The word Yaba must come from the variable, not typed inside
//     the sentence.)
// your code here

let location = "Yaba"

console.log (`I study at Gomycode in ${location}`)




// E3. Create these variables:
//        studentName  = your name
//        courseName   = "Web Development"
//     Then print exactly:
//        Hello Mubarak, welcome to Web Development!
//     (using your own name, and both variables in the sentence)
// your code here

let studentName  = "Joshua"
let courseName   = "Software Development"

console.log (`Hello ${studentName}, welcome to ${courseName}`)



// E4. Fix the bug. This line is missing something, so the output
//     comes out squashed together. Correct it.

let animal = " goat ";
console.log("My favourite animal is the" + animal + "and I like it");

// What was wrong? the value of the variable was not spaced on both sides



/* ---------------------------------------------------------
   PART F — CHALLENGE: THE CYLINDER
   --------------------------------------------------------- */

// Formula reminders:
//     Area of the base (a circle) = PI * radius * radius
//     Volume of a cylinder        = PI * radius * radius * height

// F1. Create a constant PI with the value 3.142.
// your code here

const PI = 3.142


// F2. Create two variables: radius = 7 and height = 10.
// your code here

let radius = 7
let height = 10

// F3. Calculate the area of the base and store it in a variable
//     called baseArea. Print it with a clear label, like:
//        The base area is: 153.958
// your code here

let baseArea = PI * radius * radius

console.log (`The base area is: ${baseArea}`)

// F4. Calculate the volume and store it in a variable called volume.
//     Print it with a clear label.
// your code here

let volume = PI * radius * radius * height

console.log (`The volume is: ${volume}`)

// F5. Change radius to 3 and height to 5, then run the file again.
//     Write down the two new answers here:
//        New base area: ______________
//        New volume:    ______________

radius = 3
height = 5

console.log (`The volume is: ${volume}`)
console.log (`The base area is: ${baseArea}`)

/* ---------------------------------------------------------
   PART G — BUILD IT YOURSELF (submit this part)
   --------------------------------------------------------- */

// Build a small "Student ID Card" that prints to the console.
//
// Requirements:
//   - Use const for anything that should never change
//     (e.g. the school name).
//   - Use let for anything that could change (e.g. level, phone).
//   - Include at least ONE number variable and FOUR string variables.
//   - Use camelCase for every variable name.
//   - Build each printed line using concatenation with a variable
//     inside it — do not type the whole sentence as one long string.
//
// Your output should look something like this:
//
//   ===== GOMYCODE STUDENT CARD =====
//   Name: Chidinma Okeke
//   Phone: 08012345678
//   Course: Web Development
//   Age: 22
//   Location: Yaba Hackerspace
//   =================================

// your code here