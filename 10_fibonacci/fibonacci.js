const fibonacci = function(num) {
    let realNum = parseInt(num);
    let arr = new Array();
    if(realNum<0) {
        return 'OOPS';
    }

    for(let i = 0; i<realNum; i++) {
        if(i == 0 || i == 1) {
            arr.push(1);
        }
        else {
            let value = arr[i-1] + arr[i-2];
            arr.push(value);
        }
    }

    
    
    return parseInt(arr.slice(-1));
};

// Do not edit below this line
module.exports = fibonacci;
