// 2. Remove Duplicates
// Given an array of integers, remove the duplicates and return an array of only unique elements.

// const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];// Excpected return [ 1, 2, 3, 5, 9, 8 ]

let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
let noDupes = [...new Set(array)]
console.log(noDupes);

//Works with any array:
function removeDuplicates(array) {
    let newArray = [];
    array.forEach(value => {
        if (!newArray.includes(value)) {
            newArray.push(value);
        }
    });
    console.log(newArray);
}

let secondTest = [1,2,2,2, 4, 5, 6, 8, 8, 9]
removeDuplicates(secondTest);

let alphaTest = ["Bob", "Bob", "Joe", "Joe"]
removeDuplicates(alphaTest);