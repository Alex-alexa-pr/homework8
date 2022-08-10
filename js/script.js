"use strict";

//1
function sumTwoSmallestNumbers(...args) {
    const sortedArgs = args.sort((a, b) => a - b);
    return sortedArgs[0] + sortedArgs[1];
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77));
console.log(sumTwoSmallestNumbers(1, 3, 2));
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

