const removeFromArray = function(arr, item1, item2 = null, item3 = null, item4 = null, item5 = null) {
    
    for (let i = 1; i < arguments.length; i++){
        let removeMe = arr.indexOf(item1);
        
        if((arr.find(item1))!= undefined){
            arr.splice(removeMe, 1);
        }
        

    }

    
    // if(item2 != null){
    //     removeMe = arr.indexOf(item2);
    //     arr.splice(removeMe, 1);
    // }

    // if(item3 != null){
    //     removeMe = arr.indexOf(item3);
    //     arr.splice(removeMe, 1);
    // }

    // if(item4 != null){
    //     removeMe = arr.indexOf(item4);
    //     arr.splice(removeMe, 1);
    // }

    // if(item5 != null){
    //     removeMe = arr.indexOf(item5);
    //     arr.splice(removeMe, 1);
    // }

    console.log(arr);
    return arr;
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;

/* 
debugging needed:

removing 1 item works, it breaks when i added all the if statement logical structures 
and the parameters after item1.

also plz find a better way to write this, its embarrassing.
*/
