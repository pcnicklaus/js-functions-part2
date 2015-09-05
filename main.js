function titleCase(str) {
  for (var i = 0; i < str.length; i++ )
    if (str.charAt(i) === ' ') {
      str.charAt(i+1).toUpperCase();
    }
  return str;
}

titleCase("I'm a little tea pot");


//1. Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
var persons = [
  {name: "Chuck", age: 22},
  {name: "Brian", age: 46},
  {name: "Ross", age: 90}
]


function oldestPerson (people) {
  var oldestAge = 0;
  var oldestPerson = [];
  for(i = 0; i < people.length; i++){
      if (oldestAge < people[i].age) {
            oldestAge = people[i].age;
            oldestPerson = people[i];
          console.log(people[i].age);
      }

    }
    console.log(oldestPerson.name);
    return oldestPerson.name;
  }
console.log(oldestPerson(persons));


// 1. Define a function called `longestWord` that takes a string and returns the longest word in the string.
function longestWord(string) {
  var stringBroken = string.split(" ");
  var longestWordLength = 0;
  var longestWord = [];
  for (var i = 0; i < stringBroken.length; i++) {
    if (longestWordLength < stringBroken[i].length) {
      longestWordLength = stringBroken[i].length;
      longestWord = stringBroken[i];
      console.log(stringBroken[i])
    }
  }
  return longestWord;
}
console.log(longestWord("what is the supercali Example longest word of the string"));


// 1. Refactor the `longestWord` function so that it ignores punctuation.

function longestWord(string) {
  var stringBroken = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
  console.log(stringBroken);
  var longestWord2 = 0;
  var longestWordArray = [];
  var punctuation = [];
  for (var i = 0; i < stringBroken.length; i++) {
        if (longestWord2 < stringBroken[i].length) {
          longestWord2 = stringBroken[i].length;
          longestWordArray = stringBroken[i];
          console.log(stringBroken[i])
      }

  }
  return longestWordArray;

}
console.log(longestWord("what is the supercali.. Example longest word of the string"));

// 1. Define a function called `factorial` that takes a random number as an argument and then returns the factorial of that given number.
// working!!!! holy effin shite!!!!!
function factorial(end) {
  var array = [];
  var factorialNumber = 1;
  for(var i = 1; i <= end; i++) {
  	array.push(i);
    console.log(array);
  }
  for (var j = 0; j < array.length; j++) {
    factorialNumber = factorialNumber * array[j];
  }
    return factorialNumber
}

console.log(factorial(4));


// 1. **Bonus**: Write a function called `palindrome` that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.

function palindrome(string) {
  var stringToArray = string.split("");
  var reversedArray = stringToArray.reverse();
  var reversedString = reversedArray.join("");
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("hello"));
