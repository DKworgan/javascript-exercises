const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let total = 0;
  
  for(let i = 0; i < arr.length; i++){
    total += arr[i];
  }

  return total;
};

const multiply = function(arr) {
  let total = arr[0];

  for(let i = 1; i < arr.length; i++){
    total *= arr[i];
  }

  return total;
};

const power = function(num, exp) {
  return Math.pow(num, exp);
	
};

const factorial = function(num) {
  if(num == 0){
    return 1;
  }

  let total = 1;

  for(let i = 1; i < num + 1; i++){
    total *= i;
  }
  
  return total;
};

factorial(1);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
