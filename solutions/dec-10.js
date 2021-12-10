// SOLUTIONS :D

// 01. FizzBuzz
function fizzBuzz(num) {
  for (let i = 1; i < num; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(16);

// 02. Remove Duplicates
function removeDuplicates(array) {
  let noDupes = [];
  for (let i = 0; i < array.length; i++) {
    if (!noDupes.includes(array[i])) {
      noDupes.push(array[i]);
    }
  }
  console.log(noDupes);
}
removeDuplicates([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]);

// 03. Anagram
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // Turning strings into an array of characters to loop through.
  str1Char = str1.toLowerCase().split("");
  str2Char = str2.toLowerCase().split("");

  for (letter of str1) {
    if (!str2Char.includes(letter)) {
      return false;
    } else {
      // if the letter is in the array splice it so that it doesn't occur again i.e. so "dog" and "dod" doesn't return true
      str2Char.splice(str2Char.indexOf(letter), 1);
    }
  }
  return true;
}

console.log(anagram("dog", "dod"));

// 04. Capitalization
function capitalize(phrase) {
  //will store our new phrase with each word capitalized
  const words = [];
  //Split creates an array out of a string
  for (word of phrase.split(" ")) {
    //Basically saying: push "H" + "ello"
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

console.log(capitalize("hello world"));

// 05. Longest Word

function longestWord(sentence) {
  let sentenceSplit = sentence.split(" ");
  let maxLength = 0;
  let maxWord = "";

  sentenceSplit.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      maxWord = word;
    }
  });

  return maxWord;
}

console.log(longestWord("Find the longest word"));

// Alternative solution that uses "for in" instead:

function longestWord2(sentence) {
  let sentenceSplit = sentence.split(" ");
  let maxLength = 0;
  let maxWord = "";

  for (word in sentenceSplit) {
    if (sentenceSplit[word].length > maxLength) {
      maxLength = sentenceSplit[word].length;
      maxWord = sentenceSplit[word];
    }
  }

  return maxWord;
}

console.log(longestWord2("Find the longest word"));
