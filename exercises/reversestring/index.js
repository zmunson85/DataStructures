// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('leppa') === 'apple'
//   reverse('olleh') === 'hello'
//   reverse('Greetings!') === '!sgniteerG'


/* First Solution
    initiate newStr variable
    loop each char in the str, return newStr value. 
*/
function reverse(str) {
    let newStr = '';

    for (let character of str) {
        newStr = character + newStr;
    }

    return newStr;
}

module.exports = reverse;

/*
Solution 2:
Refactored with built in JS methods */
// function reverse(str) {
//     return str
//         .split('')              //split method splits a string into an array of substrings, then returns that array
//         .reverse()          //reverse method will reverse the order of elements in the array
//         .join('');             //join will return an array as a string
//     //self returns the original str in reverse order, split, reverse and join/return
// }

// module.exports = reverse;
//Refactor BigO of 1
/* create a function that will return a reversed value of the string given */
// function reverse(str) {
//     console.log(str);
//     return str.split('').reduce((rev, char) => char + rev, '');
// }


// module.exports = reverse;


/*  NOTES:
.split('') split method splits string into an array of substrings, then returns that array.
.reverse() reverse method reverses the order of elements in an array.
.join('') join method will return an array as a string.
*/