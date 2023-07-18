const leapYears = function(year) {

    if(year % 100 == 0) {
        if (year % 25 == 0 && year % 16 == 0) {     //Divisibility for 400 is decided by testing highest power of prime factors divisibility which is 5^2 and 4^2
            return true;
        }
        else
            return false;
    }
    else
        if (year % 4 == 0) {
            return true;
        }
        else
        return false;

};

// Do not edit below this line
module.exports = leapYears;
