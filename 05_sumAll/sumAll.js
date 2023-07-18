const sumAll = function(num1, num2) {
    if(num1 < 0 || num2< 0 || !Number.isFinite(num1)|| !Number.isFinite(num2)) {
        return "ERROR";
    }

    let smallNum = 0;
    let largeNum = 0; 

    if(num1>num2) {
        smallNum = num2;
        largeNum = num1;
    }
    else if (num1<num2) {
        smallNum = num1;
        largeNum = num2;
    }
    
    let sum = 0;
    for (let i = smallNum; i <= largeNum; i++) {
        sum += i;
    }
    return sum; 

};

// Do not edit below this line
module.exports = sumAll;
