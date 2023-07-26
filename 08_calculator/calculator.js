const add = function(num1, num2) {
    let sum = 0;
    sum = num1+num2;
    return sum;
};

const subtract = function(num1, num2) {
    let sum = 0;
    sum = num1-num2;
    return sum;
};

const sum = function(arr) {
  let sum = 0;
	for(num in arr){
    sum += arr[num];
  }
  return sum;
};

const multiply = function() {
  let sum = 1;
  for(let i in arguments) {
    sum*=arguments[i]
  }
  return sum;
};

const power = function(num1, num2) {
  let num3 = num1; 
  for(let i = 1; i<num2; i++) {
    num3 *= num1;
  }
  return num3;//Math.pow is another solution. But not for learning.
};

const factorial = function(num1) {
  let sum = 1;
  for(let i = num1; i>0; i--) {
    sum *= i;
  }
	return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
