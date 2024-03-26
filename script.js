/** Task 1: An array is give. There are elements of different types in it. Write a function that calculates mathematical average of elements of current array which are numbers */

function calculateAverage(arr) {
    //Iterate through array
    const numbers = arr.filter(element => typeof element === 'number');

    //Check if there any numbers in array
    if (numbers.length === 0) {
        return 0;
    }
    //In accumulator variable adding all numbers
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //Calculating math average
    return sum / numbers.length;
}

const array = [1, '2', 3, '4', 5];
const average = calculateAverage(array);
console.log(average);

/** Task 2: Write a function doMath, which recieves as parameters numbers x and y, and variable znak. These numbers and variable znak we recieve from a user. Variable znak contains mathematical operators - +, -, *, /, %, ^ . Do mathematical operation with recieved numbers and particular variable znak*/

const x = +prompt('Enter any integer');
const y = +prompt('Enter one more integer');
const znak = prompt('Enter any mathematical operator');

function doMath(x, y, znak) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y === 0) {
                return "Division by zero is not allowed.";
            }
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return "Invalid operator";
    }
}

const result = doMath(x, y, znak);

console.log(result);