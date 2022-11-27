const leapYears = function(year) {
/* 
 Leap years are years divisible by four (like 1984 and 2004). 
 However, years divisible by 100 are not leap years (such as 1800 and 1900) 
 unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)*/

let leapYear = false;

if( ( year % 4 ) == 0){

    if( (year % 400 ) == 0 && ( year % 4 ) == 0){
        return leapYear = true;
    }
    if ( ( year % 100 ) == 0 ){
        return leapYear;
    }
    return leapYear = true;
} else {
    return leapYear;
}
};

console.log(leapYears(700));

/***********TEST CASE NOT PASSING BECAUSE THERES A YEAR THATS PASSING THROUGH WITHOUT A RETURN */ 
// Do not edit below this line
module.exports = leapYears;
