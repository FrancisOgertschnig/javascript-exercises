const repeatString = function (word, num) {
    if (num < 0) {
        return "ERROR";
    }

    let i = 1;
    let sentence = '';
    while (i <= num) {
        sentence = sentence + word;
        i++;
    }

    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
