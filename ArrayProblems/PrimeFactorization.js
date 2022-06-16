const prompt = require('prompt-sync')();
let num = prompt("Enter Number: "); 
//because 2 is only the even prime factor
let arr = [];
while (num % 2 == 0) {
    arr.push(2);
    num /= 2;
}

for (let i = 3; i <= num / 2; i += 2) {
    while (num % i == 0) {            // If remainder = 0, then print i and divide num by i
        arr.push(i);
        num /= i;
    }
}
if (num > 2)
arr.push(num);

console.log("arr: ", arr)
