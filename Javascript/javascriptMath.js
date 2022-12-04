// let num1 = 10.55;

// console.log("Round Function: " + Math.round(num1)); // 11
// console.log("Floor Function: " + Math.floor(num1)); //10
// console.log("Ceil Function: " + Math.ceil(num1)); // 11

// console.log(Math.sign(-100));
// console.log(Math.sign(100));
// console.log(Math.sign(0));

// console.log(Math.pow(2, 3));

// let randomNumber = Math.random() * 10;
// let randomInt = Math.ceil(randomNumber);
// console.log("Random Number: " + randomInt);

// //WAP to create a number guessing game

function numberGuesser() {
  let myNumber = randomInt;
  let tries = 0;

  while (tries < 3) {
    let userGuess = prompt("Guess The Number(1-10): ");
    if (userGuess == myNumber) {
      console.log("Congraluations you won!");
      return;
    }
    tries++;
  }
  console.log("Sorry out of lives");
  console.log("The number was: " + myNumber);
}
// // numberGuesser();

function revArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

// let rev = revArray([1, 2, 3, 4, 5]);
// console.log("The reversed form is: " + rev);

function effectiveSolution(arr) {
  let start = 0;
  let end = arr.length;
  let swapped = 0;

  while (start < end) {
    swapped = arr[end];
    arr[end] = arr[start];
    arr[start] = swapped;
    start++;
    end--;
  }
  return arr;
}

// console.log("The reversed Array is: " + effectiveSolution([1, 2, 3, 4, 5]));

// 0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ

// Random Password generator

function passwordGenerator(length) {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = length;

  let password = "";
  let arr = new Uint32Array(passwordLength);
  window.crypto.getRandomValues(arr);
//   console.log(arr);

    for (let i = 0; i < passwordLength; i++) {
      password += chars[arr[i] % chars.length];
    }
  return password;
}

console.log(passwordGenerator(10));
