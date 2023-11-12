function sumArray(arr) {
  let sum = 0;

  for (let element of arr) {
    sum += element;
  }

  return sum;
}

let result = sumArray([1, 2, 3, 4, 5]);

console.log(result);


function getDivisors(number) {
  if (number <= 0) {
    return "Число должно быть положительным";
  }

  let divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

let divisorsArray = getDivisors(12);

console.log(divisorsArray);


function stringToCharArray(str) {
  return str.split('');
}

let exampleString = "Hello, World!";
let charArray = stringToCharArray(exampleString);

console.log(charArray);


function reverseString(str) {
  return str.split('').reverse().join('');
}

let reversedString = reverseString(exampleString);

console.log(reversedString);


function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

let capitalizedString = capitalizeFirstLetter('hello');

console.log(capitalizedString);


function createArrayUpToN(n) {
  let resultArray = [];

  for (let i = 1; i <= n; i++) {
    resultArray.push(i);
  }
  return resultArray;
}

let resultArray = createArrayUpToN(5);

console.log(resultArray);


function sumOfDigits(number) {

  let sum = 0;
  let numString = number.toString();

  for (let digit of numString) {
    sum += parseInt(digit, 10);
  }

  return sum;
}

let resultSum = sumOfDigits(12345);

console.log(resultSum);


function isLeapYear(year) {

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

let isLeap = isLeapYear(2024);

console.log(isLeap);


function secondsToDays(seconds) {

  let secondsInDay = 24 * 60 * 60;
  let days = Math.floor(seconds / secondsInDay);

  return days;
}

let days = secondsToDays(172800);

console.log(days);


function getRandomElementFromArray(array) {

  let randomIndex = Math.floor(Math.random() * array.length);
  let randomElement = array[randomIndex];

  return randomElement;
}

let randomElement = getRandomElementFromArray([1, 2, 3, 4, 5]);

console.log(randomElement);


function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let isPrimeResult = isPrime(13);

console.log(isPrimeResult);