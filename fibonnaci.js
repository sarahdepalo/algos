// 4. Fibonnaci
// How do you get the nth number of a fibonnaci sequence? The Fibonacci Sequence is the series of numbers:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// The next number is found by adding up the two numbers before it

// function fibonnaci(n){
// };
// console.log(fibonnaci(9));
// //expected outcome 21

function fibonnaci (num) {
    if (num <  2) {
        return num;
    }
    else {
        return fibonnaci(num - 1) + fibonnaci(num - 2);
    }
}

console.log(fibonnaci(9));