/** Task 1: An array is give. There are elements of different types in it. Write a function that calculates mathematical average of elements of current array which are numbers */

const array = [1, '2', 3, '4', 5];

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


const average = calculateAverage(array);
console.log(average);



/** Task 2: Write a function doMath, which recieves as parameters numbers x and y, and variable znak. These numbers and variable znak we recieve from a user. Variable znak contains mathematical operators - +, -, *, /, %, ^ . Do mathematical operation with recieved numbers and particular variable znak*/

const x = parseInt(prompt('Enter any integer'));
const y = parseInt(prompt('Enter one more integer'));
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



/** Task 3: Write a function where user fills two-dimentional array with numbers. User also sets length of external and internal arrays. Print out the array filled by a user */

function fillArray() {
    //Asking user to set length for external and internal arrays
    const externalLength = parseInt(prompt('Enter the length of the external array: '));
    const internalLength = parseInt(prompt('Enter the length of the internal arrays: '));

    //Declaring empty external array
    const array = [];

    //Iterating through external arr, declaring empty internal arr, for each index asking user to set a number, filling array
    for (let i = 0; i < externalLength; i++) {
        const internalArray = [];
        for (let j = 0; j < internalLength; j++) {
            const element = parseInt(prompt(`Enter the element for index (${i}, ${j}): `));
            internalArray.push(element);
        }
        array.push(internalArray);
    }

    return array;
}

//Iterating one more time through final arr and printing it to console as a 2-dim using json.stringify()
function printArray(array) {
    console.log('Array filled by the user: ');
    console.log(JSON.stringify(array));
}

const userArray = fillArray();

printArray(userArray);



/** Taskk 4: Write a function that receives two parameters - string, and array of characters - which sets a user via prompt. Function deletes respective characters form a string and returns changed string */

const inputString = prompt('Enter any string: ');
const charsArr = prompt('Enter characters to remove from string, separated by commas: ');
const charactersToRemove = charsArr.split(',').map(char => char.trim());

function removeCharactersFromString(stringReceived, charactersToRemove) {
    //set original string to changed one
    let stringChanged = stringReceived;

    //iterating through each character (array) which user set to remove
    charactersToRemove.forEach(char => {
        const regex = new RegExp(char, 'g');
        stringChanged = stringChanged.replace(regex, '');
    });

    return stringChanged;
}

const outputString = removeCharactersFromString(inputString, charactersToRemove);
console.log('String after removing characters: ', outputString);