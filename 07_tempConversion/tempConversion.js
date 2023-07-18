const convertToCelsius = function(degree) {
  let newDegree = (degree - 32) * 5/9;
  if(Number.isInteger(newDegree)) {
    return newDegree;
  }
  else
    return +newDegree.toFixed(1);  
};

const convertToFahrenheit = function(degree) {
  let newDegree = (degree * 9/5) + 32;
  if(Number.isInteger(newDegree)) {
    return newDegree
  }
  else
    return +newDegree.toFixed(1); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
