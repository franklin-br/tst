

let numberOne = prompt("Enter the first number here: ")
let numberTwo = prompt("Enter the second number here: ")

 numberOne = Number(numberOne)
 numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo 
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div =  numberOne / numberTwo
const rem = (numberOne % numberTwo) /2

if (sum % 2 === 0) {
    console.log("The sum of the two numbers is even!");
  } else {
    console.log("The sum of the two numbers is odd!");
  }
 
  if (numberOne !== numberTwo) {
    console.log("The numbers are different!");
  } else {
    console.log("The numbers are the same!");
  }  

alert("The sum of the two numbers: " +sum)
alert("The subtraction of the two numbers: " +sub)
alert("The multiplication of the two numbers: " +mult)
alert("The division of the two numbers: " +div)
alert("The remainder of the division of the two numbers: " +rem)

