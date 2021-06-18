// Product of three largest integers: 
// Given an array of integers, find the largest product of three integers.

// const unsortedArray = [-10, 7, 29, 30, 5, -10, -70];// Expected return 21000

function findLargestProduct (numArray) {
    if (numArray.length < 3) {
        console.log("There are not three numbers in this array.")
    }
    else {
        let largest = 0;
        let largestThree = [];
        for(i=0; i < numArray.length; i++) {
            if(numArray[i]>largest) {
                largest = numArray[i];
                largestThree.push(largest);
            }
        }
        console.log(largestThree)
        let sum = 1;
        for (i=0; i<largestThree.length; i++) {
            sum = sum * largestThree[i];
        }
        console.log(sum)
    }
}

const unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
findLargestProduct(unsortedArray);
