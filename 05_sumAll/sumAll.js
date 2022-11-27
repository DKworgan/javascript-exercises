const sumAll = function(num1, num2) {

/* 
- test if num2 > num1

idea 1: i could create a different for loop based on that inside if structure
idea 2: create and assign 2 new variable, lesser and greater. <-- this seems far cleaner
*/

let lesser;
let greater;

//testing argument validity
    if(( num1 < 0 ) || ( num2 < 0 )){
        return "ERROR";
    } else if( typeof num1 !== "number" || typeof num2 !== "number" ){
        return "ERROR";
    }

    if(num1 < num2){
        lesser = num1;
        greater = num2;
    } else if(num1 > num2) {
        lesser = num2;
        greater = num1;
    } else{
        //this is because they would be equal, therefore no sum is happening. returning the number
        total = num1; 
    }
    let total = lesser;

    //+1 to i because we already added num1 to total
    //+1 to num2 to include num2 in the total
    for(let i = lesser + 1; i < greater + 1; i++){
        total += i;
    }

    return total;
};

sumAll(10, "90");
// Do not edit below this line
module.exports = sumAll;
