const palindromes = function (str) {
    let lowerStr = str.toLowerCase();
    let actualStr = lowerStr.replaceAll(/[! ,.]/g,"");
    let arrayString = Array.from(actualStr);
    let reverseArray = arrayString.reverse();
    let reverseStr = reverseArray.join("");
    
    if(reverseStr == actualStr){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
