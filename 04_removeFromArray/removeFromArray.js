const removeFromArray = function(arr, item1, item2 = null, item3 = null, item4 = null, item5 = null) {
    
    for (let i = 1; i < arguments.length; i++){
        
        //indexOf returns -1 if argument is not found in array
        let removeMe = arr.indexOf(arguments[i]);
        
        if(removeMe != -1){
            arr.splice(removeMe, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;


