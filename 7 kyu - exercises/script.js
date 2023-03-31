// 1. Two to One
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const everyLetters = s1.split('').concat(s2.split(''));
    const array = [];
    for (const letter of everyLetters) {
      if (array.indexOf(letter) === -1) {
      array.push(letter);
      }
    }
    return array.sort().join('');
  };
   
longest("aretheyhere", "yestheyarehere");
//  longest("loopingisfunbutdangerous", "lessdangerousthancoding");
//  longest("inmanylanguages", "theresapairoffunctions");


// 2. Remove the minimum
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

//(first option)

function removeSmallest(numbers)
 {
  if (numbers === []) {
    return numbers;
  } else {
    const a = numbers.indexOf(Math.min(...numbers));
    let b = numbers.slice(0,a)
    let c = numbers.slice(a +1,numbers.length)
    return b.concat(c)
  }
}

//(second option)

// function removeSmallest(numbers)
//  {
//   if (numbers === []) {
//     return numbers;
//   } else {
//     const a = numbers.indexOf(Math.min(...numbers));
//     return numbers.filter((element,index)=> element = index !== a)
//   }
// };

removeSmallest([1, 2, 3, 4, 5]);
// removeSmallest([5, 3, 2, 1, 4]);
// removeSmallest([2, 2, 1, 2, 1]);
// removeSmallest([]);


// 3.Sum Arrays
//  Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  };
  
  sum([]);
  // sum([1, 5.2, 4, 0, -1]);


// 4. Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let a = 0;
  for (let i = 0; i < sorted.length / 2; i++) {
    a += sorted[i] * sorted[sorted.length - i - 1];
  }
  return a;
};

console.log(minSum([1, 2, 3, 4]));  


// 5. Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result ^= numbers[i];
  }
  return result;
};

stray([1, 1, 2]);
// stray([1, 2, 1]);
// stray([2, 1, 1]);


// 6. Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

reverseWords('The quick brown fox jumps over the lazy dog.');
// reverseWords('apple')


// 7. Make a function that does arithmetic!
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator) {
  const ops = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
  return ops[operator](a, b);
}

arithmetic(1, 2, "add");
// arithmetic(8, 2, "subtract");


// 8. String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  return str.endsWith(ending);
}

solution('abcde', 'cde');
// solution('abcde', 'abc');


// 9. Round up to the next multiple of 5
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// 9.1 First solution
function roundToNext5(n){
  return Math.abs(Math.ceil(n / 5) * 5) * Math.sign(n);
}

// 9.2 Second solution
// function roundToNext5(n){
//   return Math.ceil(n / 5) * 5;
// }

roundToNext5(29);


// 10. Is this a triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c) {
  return a + b > c && a + c > b && b + c > a
}

isTriangle(1,2,2);
// isTriangle(7,2,2);


// 11. Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples: 
// Testing: [0, 0, 0, 1] ==> 1
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
};

// binaryArrayToNumber([0,0,0,1]);
binaryArrayToNumber([0,1,0,1]);


