const reverseString = function(stringToReverse) {
    let stringLen = stringToReverse.length;
    let reversedString = stringToReverse[stringLen - 1];
    
    if(stringToReverse == ""){
        return "";
    }
    for(let i = stringToReverse.length - 2; i > -1; i--){
        reversedString += stringToReverse[i];
    }

    console.log(reversedString);
    return reversedString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
