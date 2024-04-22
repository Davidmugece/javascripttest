//String Manipulation Functions:

//Reverse a String: Write a function that reverses a given string.

function reverseString(string) {
    return string.split('').reverse().join('');
}


//Count Characters: Create a function that counts the number of characters in a string.

function countCharacters(string) {
    return string.length;
}

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
