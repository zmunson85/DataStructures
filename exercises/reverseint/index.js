// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reverseNum = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(reverseNum) * Math.sign(n);
}

module.exports = reverseInt;


/* notes
toString()- this method will return a string representing the specified number object.


The Math.sign() function returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument. If the number passed into Math.sign() is 0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will not be returned.

*/