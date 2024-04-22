//Mathematical Functions:

//Factorial: Write a function to calculate the factorial of a given number.

function factorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

//Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )


function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}