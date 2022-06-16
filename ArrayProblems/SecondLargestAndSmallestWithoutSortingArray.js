// Find the 2nd largest and the 2nd smallest element without sorting the array

let numArray = [];
let n = 10;
for (let i = 1; i <= n; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    numArray.push(number);
}
console.log("numArray: ", numArray);

let firstMax = numArray[0];
let secondMax = numArray[0];
let firstMin = numArray[0];
let secondMin = numArray[0];

for (let number of numArray) {
    if (number > firstMax) {
        secondMax = firstMax;
        firstMax = number;
    }
    else if (number > secondMax) {
        secondMax = number;
    }
    if (number < firstMin) {
        secondMin = firstMin;
        firstMin = number;
    }
    else if (number < secondMin) {
        secondMin = number;
    }
}
console.log("Second largest Number: ", secondMax);
console.log("Second smallest Number: ", secondMin);