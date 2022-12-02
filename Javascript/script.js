// operators

// Arithmetic Operators

// var first = 10;
// var second = 20;
// var third = "30";

// console.log(10 % 2);

// if ("0" === 0) {
//   console.log("Hello");
// }

// console.log(typeof "10");

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Print all even numbers from 0 – 10

// for (var i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// Print all odd numbers from 0 – 10

// for (var i = 0; i <= 10; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// Print a table containing multiplication tables upto 10 for any number

//5x1 = 5
// 5x2 = 10
// ...
// 5x10 = 50

// var num = prompt("Enter a number");

// for (var i = 1; i <= 10; i++) {
//   //   console.log(num + "X" + i + " = " + num * i);
//   console.log(`${num} X ${i} = ${num * i}`);
// }

// WAP to ask a user's name, age, address and print it as follow:
// Eg: Ram is 24 years old and lives in Kathmandu

// var userName = prompt("Enter Your Name");
// var age = prompt("Enter Your Age");
// var address = prompt("Enter Your Address");

// console.log(`${userName} is ${age} years old and lives in ${address}.`);

// Create a length converter program (m to kilometers)
// var meter = prompt("Enter the distance in meters.");
// console.log(`The distance in kilometers is ${meter / 1000}KM`);

// var arr = [1, 2, 3, "a", "b", "c"];
// console.log(arr[3]);
// arr.push("d");
// arr.push("t");
// arr.push("u");
// console.log(arr);
// var eml = arr.pop();
// var eml = arr.pop();
// var eml = arr.pop();
// console.log(eml);

var flag = false;
var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < newArr.length; i++) {
  //   console.log(arr[i]);
  if (newArr[i] == 99) {
    flag = true;
    break;
  }
}

if (flag) {
  console.log("Element Found");
} else {
  console.log("Element Not Found");
}

// Element Found
// Element Not Found
