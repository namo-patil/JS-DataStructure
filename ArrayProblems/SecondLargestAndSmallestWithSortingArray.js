// Program to sort the array and then find the 2nd largest and the 2nd smallest element

let numArray = new Array();
let n = 10;
for (let i = 1; i <= n; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    numArray.push(number);
}
console.log("numArray: ", numArray);

let numArraySort = numArray.sort();
console.log(numArraySort);
 
let secondMax = numArraySort.slice(8, 9);
let secondMin = numArraySort.slice(1, 2);
 
console.log("Second largest Number: ", secondMax);
console.log("Second smallest Number: ", secondMin); 