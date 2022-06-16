let num1 = 1;
let num2 = 100;
let numArr = [];

for (let i =num1; i < num2; i++) {
    if( i % 11 == 0){
        numArr.push(i)
    }    
}
console.log("Repeated Digits: ", numArr);