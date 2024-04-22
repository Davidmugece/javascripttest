//Array Functions:

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

//Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
    return arr.filter(condition);
}