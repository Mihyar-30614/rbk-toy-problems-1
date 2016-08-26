/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var returnStringTotal = (carry, total) => {
  if(carry > 0){
    total.push(carry);
  }
  return total.reverse().join("");
}

var times = (number, digit) => {
  var carry = 0;
  var total = [];
  for(var i = number.length -1; i >= 0; i--){
    var currentMult = parseInt(number[i]) * parseInt(digit) + carry;
    total.push(currentMult % 10);
    carry = Math.floor(currentMult / 10);
  }
  return returnStringTotal(carry, total);
}

var findPowerOfTwo = (number) => {
  var two = "2";
  var total = "2";
  for(var i = 1; i < number; i++){
    total = times(total, two);
  }
  return total;
}

var padNumber = (number, length) => {
  var numberPad = "";  
  for(var i = 0; i < length - number.length; i++){
    numberPad+=0
  }
  return numberPad + number 
}

var add = (number1, number2) => {
  var length = Math.max(number1.length, number2.length);
  var total = [];
  var carry = 0;
  number1 = padNumber(number1, length);
  number2 = padNumber(number2, length);
  for(var i = length -1; i >= 0; i--){
    var currentTotal = parseInt(number1[i]) + parseInt(number2[i]) + carry;
    total.push(currentTotal % 10);
    carry = Math.floor(currentTotal / 10);
  }
  return returnStringTotal(carry, total);
}

var sumPowerOfTwo = (number) => {  
  var power = findPowerOfTwo(number);
  var total = "0";
  for(var i = 0; i < power.length; i++){
    var currentDigit = power[i];
    total = add(total, currentDigit);
  }
  return total;
}
