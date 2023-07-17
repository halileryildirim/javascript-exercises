const reverseString = function(word) {
    
    let splitString = word.split("");
    let reversedString = splitString.reverse();
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
