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
