// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)



/*
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Harry") {
  console.log(b)
}
*/

//Program to print factorial of number..
// factorial number such as:
// 1! = 1
// 2! = 2 X 1 = 2
// 3! = 3 X 2 X 1 = 6
// 4! = 4 X 3 X 2 X 1 = 24
// 5! = 5 X 4 X 3 X 2 X 1 = 120
// .
// . 
// and so on...
  
//code for finding factorial number
/*const prompt = require("prompt-sync")({signint: true}) //Use this code in VS code for "prompt".
let num = prompt("Enter a number:")
num = Number.parseInt(num)
let fact = 1;
for(let i = 1;i <=num ;i++)
{
    fact = fact*i;
}
console.log("The factorial of " + num + " is " +fact) 
*/
