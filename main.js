// # Review 5 - Functions

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Write a normal function that takes in two numbers and *returns* the sum of those numbers.

function sumUp(num1, num2) {
    return num1 + num2;
}
console.log(sumUp(2, 3));

// 2. Write a normal function that takes in a string and *returns* that string capitalized.

function capitalize(str) {
    return str.toUpperCase();
}
console.log(capitalize("Blueface"));

// 3. Write a normal function that takes in an array and *returns* the last item in that array.

const numArray = [1, 2, 3, 4, 5];

function getLastItem(arr) {
    return arr.length - 1;
}
console.log(getLastItem(numArray));

// 4. Write an arrow function that takes in an array and *returns* the first item in that array.

const getFirstItem = (arr) => arr[0];
console.log(getFirstItem(numArray));

// 5. Write an arrow function that takes in a string and *returns* the last three characters of that string.

const lastThreeChar = (str) => str.slice(0, 3);
console.log(lastThreeChar("ghostface"));

// 6. Write an arrow function that takes in an array and *returns* the type of the first item in that array.

const dataTypes = [12n, true, console.log, {}, undefined];

const typeOfElement = (arr) => typeof arr[0];
console.log(typeOfElement(dataTypes));

// 7. Write an arrow function that takes in an array and *returns* true, if all items in that array have the same type.

const allSameType = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (typeof arr[i] !== typeof arr[j]) {
        return false
      }
    }
  }
  return true
}
console.log(allSameType([1,2,3,4]));
console.log(allSameType(dataTypes));

// 8. Print the `type` of a variable that has a normal function value.

function normalFnType(value) {
    console.log(typeof value);
}
normalFnType(0);

// 9. Print the `type` of a variable that has an arrow function value.

const arrowFnType = (value) => {
    console.log(typeof value);
};
arrowFnType("0");

// 10. Write and test a function that takes in two parameters (min and max). That function should return another function that doesn't take in any parameters, but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.

function randomWithRange(min, max) {
    return function () {
        const randomize = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomize);
    };
}
const newRandom = randomWithRange(15, 20);
newRandom();

// 11. In your own words, explain what are side effects and what is a pure function.

/*
- Side effects: are when functions change something outside of it, like global variables for example.

- Pure functions: are functions that don't use anything from outside; affect anything outside of it and always return the same output when given the same input. Unlike the function randomWithRange() above.
*/

// 12. In your own words, explain what is the difference between functions and methods.

/* 
- Functions: are objects which allow us to perform similar action throughout the code. They can be called later on if needed so they help us to avoid repetition.

- Methods: are functions which are a value of an object property.
*/
