const reverseString = function (wordToReverse) {
    let newLength = wordToReverse.length - 1;
    let newWord = '';

    while (newLength >= 0) {
        newWord = newWord + wordToReverse[newLength];
        newLength--;
    }

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
