"use strict";

//1
function sumTwoSmallestNumbers(...args) {
    const sortedArgs = [...args].sort((a, b) => a - b);
    if (sortedArgs.length < 2) {
        console.log("error");
    }
    else {
        return sortedArgs[0] + sortedArgs[1];
    }
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77));
console.log(sumTwoSmallestNumbers(1, 3, 2));
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

//2
const calc = createCalculator(10);
function createCalculator(defaultValue) {
  return {
    sum: (sumValue) => {
      return defaultValue = defaultValue + sumValue;
    },
    mult: (multValue) => {
      return defaultValue = defaultValue * multValue;
    },
    sub: (subValue) => {
      return defaultValue = defaultValue - subValue;
    },
    div: (divValue) => {
      return defaultValue = defaultValue / divValue;
    },
  };
};
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11

