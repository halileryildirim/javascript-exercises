const removeFromArray = function(...theArgs) {
    let array = theArgs[0].map((x) => x); //It's known that first parameter is an array, 
    const args = Array.from(theArgs);   
    args.shift();         //Rest of the arguments are received with array.from + shift function since first element is the array we're working with.
    
    for (let a = 0; a < args.length; a++) { //Searching the array for the parameters, if successes loops the array with splice to avoid undefined values in array.
        if (array.includes(args[a])) {
            let removeItem = args[a];
            for (let b = 0; b<array.length; b++) {  
                if(array[b] === removeItem) {
                    array.splice(b, 1);
                }
            }
        }
    }

    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
