// 1. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  return array.map(element => element * -1);
}

invert([1,2,3,4,5]);
// invert([1,-2,3,-4,5]);
// invert([]);
// invert([0]);


// 2. Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return s.repeat(n);
}

repeatStr(3, "*");
// repeatStr(5, "#");
// repeatStr(2, "ha ");


// 3.What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(str) {
  return str.split(" ").map((element) => element + " " + element.length);
}

addLength('apple ban');
// addLength('you will win');


// 4.Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
  let sum = a + b;
  let thirdAngle = 180 - sum;
  return thirdAngle;
}

otherAngle(30, 60);
// otherAngle(60, 60);
// otherAngle(43, 78);
// otherAngle(10, 20);


// 5. Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  return x.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue);
  }, 0); 
}

sumMix([9, 3, '7', '3']);
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]); 
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']); 


// 6. I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ];
  let index = (nbPetals - 1) % phrases.length;

  return phrases[index];
}

howMuchILoveYou(7);
// howMuchILoveYou(3);
// howMuchILoveYou(6);


// 7. Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name){
  let words = name.split(" ");
  let initials = words.map(word => word[0].toUpperCase());
  return initials.join(".");
}

abbrevName("Sam Harris");
// abbrevName("Patrick Feenan");
// abbrevName("Evan Cole");
// abbrevName("P Favuzzi");
// abbrevName("David Mendieta");


// 8. Count by X
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10];
// countBy(2,5) === [2,4,6,8,10];

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
};

countBy(1,10);
// countBy(2,5);


// 9. Grasshopper - Debug sayHello
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function sayHello(name) {
  return `Hello, ${name}`
};

sayHello('Mr. Spock');
// sayHello('Captain Kirk');
// sayHello('Liutenant Uhura');
// sayHello('Dr. McCoy');


// 10. Transportation on vacation
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50;
  } else if (d >= 3) {
    return (d * 40) - 20;
  } else {
    return d * 40;
  }
}

rentalCarCost(1);
// rentalCarCost(2);
// rentalCarCost(3);
// rentalCarCost(4);
// rentalCarCost(5);