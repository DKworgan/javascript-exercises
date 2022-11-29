const palindromes = function (word) {
    let reversedWord = " "; 
    let parsedWord = " ";

    word = word.toLowerCase();

    //appends character, if character falls between 
    // lower case a - z
    for(let i = 0; i < word.length; i++){
        if(word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122){
            parsedWord += word.charAt(i);
            //console.log(word.charAt(i));
        }
    }
     parsedWord = parsedWord.trim();


    for(let i = parsedWord.length - 1; i > -1; i--){
        reversedWord += parsedWord[i];
    }
    
    reversedWord = reversedWord.trim();

    if(reversedWord == parsedWord){
        return true;
    } else {
        return false;
    }
};


//palindromes("race");
// Do not edit below this line
module.exports = palindromes;
