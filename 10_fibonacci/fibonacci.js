const fibonacci = function(nthFib) {
    let fibArr = [1,1];
    let finalValue;
    let fibValue;

    nthFib = parseInt(nthFib);
    if(nthFib < 1){
        return "OOPS";
    }

    if(nthFib == 1 || nthFib == 2){
        return 1;
    }

    for(let i = 0; i < nthFib - 2; i++){
        fibValue = fibArr[i] + fibArr[i + 1];
        fibArr.push(fibValue);
        finalValue = fibValue;
    }

    return finalValue;
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;


/* 
Design

there are two ways that i am thinking to do this:
- reverse engineer what the fibonacci number is based on the sequence
- just calculate it and send out the number <--- this seems far easier 

variables:
- limit, the last number in the sequence to hit in the for loop
- for loop to calculate 
- return 
*/