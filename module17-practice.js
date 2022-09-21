// pp 1
var fruits = ['Apple', 'Banana', 'Orange'];
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);
fruits[1] = 'Mango';
console.log(fruits);
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);

// pp 2
var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var jonScore = 40;

if (myScore>80 || tomScore>80) {
    console.log('You got A+');
}
else {
    console.log();
}

// pp 3
var number1 = 13;
var number2 = 79;
var number3 = 45;
if (number1 > number2 && number1 > number3) {
    console.log('The first number is largest number');
}
else if (number2 > number1 && number2 > number3) {
    console.log('The Second number is largest number');
}
else {
    console.log('The Third number is largest number');
}

var side1 = 3;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3) {
    console.log("Yes this triangle us isosceles");
}
else if (side2 == side1 || side2 == side3) {
    console.log("Yes this triangle us isosceles");
}
else {
    console.log("This is not a isosceles triange");
}