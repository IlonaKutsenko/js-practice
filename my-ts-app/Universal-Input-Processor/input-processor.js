"use strict";
function processInput(input) {
    if (typeof input === "string") {
        return `String: ${input.toUpperCase()}`;
    }
    else if (input instanceof Date) {
        return `Date: ${input.toISOString()}`;
    }
    else {
        return `Sum of numbers: ${input.reduce((sum, num) => sum + num, 0)}`;
    }
}
const inputString = "Hello";
const inputDate = new Date("02/02/2021");
const inputArray = [1, 2, 3, 4, 5];
console.log(processInput(inputString));
console.log(processInput(inputDate));
console.log(processInput(inputArray));
