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
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

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


  