//***************************************************************//
// Task 1: Working with Variables
//***************************************************************//

// Declare a variable named 'myNumber' and assign it the value of 10.
// This variable stores a number.
let myNumber = 10;

// Declare a variable named 'myString' and assign it the value of "Hello, JavaScript!".
// This variable stores a string of text.
let myString = "Hello, JavaScript!";

// Print the value of 'myNumber' to the console.
// The console will display: 10
console.log(myNumber);

// Print the value of 'myString' to the console.
// The console will display: Hello, JavaScript!
console.log(myString);

//***************************************************************//
// Task 2: Exploring Loops
//***************************************************************//

1. // Use a 'for' loop to iterate through numbers from 0 to 10.
// The loop will execute 11 times, with 'i' starting at 0 and increasing by 1 until it reaches 10.
for (let i = 0; i <= 10; i++) {
    // Print the current value of 'i' to the console.
    // The console will display each number from 0 to 10 on a new line.
    console.log(i);
}

//***************************************************************//

2. // Use a 'for' loop to calculate and print the first 5 multiples of 3.
// The loop runs 5 times, with 'i' starting at 1 and increasing by 1 until it reaches 5.
for (let i = 1; i <= 5; i++) {
    // Multiply 3 by the current value of 'i' and print the result to the console.
    // The console will display: 3, 6, 9, 12, 15 (the first five multiples of 3).
    console.log(3 * i);
}

//***************************************************************//
// Task 3: Discovering Functions
//***************************************************************//

// Define a function named 'addNumbers' that takes two parameters: 'num1' and 'num2'.
// This function adds the two numbers together and returns the result.
function addNumbers(num1, num2) {
    return num1 + num2;  // Return the sum of 'num1' and 'num2'.
}

// Call the 'addNumbers' function with arguments 5 and 10.
// The result of the addition (15) will be printed to the console.
console.log(addNumbers(5, 10));

//***************************************************************//

// Define another function named 'multiplyNumbers' that takes two parameters.
// This function multiplies the two numbers together and returns the result.
function multiplyNumbers(num1, num2) {
    return num1 * num2;  // Return the product of 'num1' and 'num2'.
}

// Call the 'multiplyNumbers' function with arguments 4 and 5.
// The result of the multiplication (20) will be printed to the console.
console.log(multiplyNumbers(4, 5));

//***************************************************************//
