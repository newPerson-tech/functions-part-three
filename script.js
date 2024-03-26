/**An array is give. There are elements of different types in it. Write a function that calculates mathematical average of elements of current array which are numbers */

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