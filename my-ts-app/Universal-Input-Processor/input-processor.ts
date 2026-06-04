type ProcessableInput = string | Date | number[];

function processInput(input: ProcessableInput): string | number {
    if (typeof input === "string") {
        return `String: ${input.toUpperCase()}`;
    } else if (input instanceof Date) {
        return `Date: ${input.toISOString()}`;
    } else {
        return `Sum of numbers: ${input.reduce((sum, num) => sum + num, 0)}`;
    }
}

const inputString: ProcessableInput = "Hello";
const inputDate: ProcessableInput = new Date("02/02/2021");
const inputArray: ProcessableInput = [1, 2, 3, 4, 5];

console.log(processInput(inputString));
console.log(processInput(inputDate));
console.log(processInput(inputArray));
