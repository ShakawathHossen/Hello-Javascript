// problem 2

function make_avg(average) {
    var sum = number1 + number2 + number3;
    var avg = sum / 3;
    return avg;
    
}

var number1 = 3;
var number2 = 3;
var number3 = 4;
var average = make_avg(number1, number2, number3);
console.log('Average of 3 number is', average.toFixed(2));

// problem 5
var signal = 'red';
switch (signal) {
    case 'red':
        console.log('Your are danger');
        
        break;
    case 'yellow':
        console.log('You should stop');
        break;
    case 'green':
        console.log('You can go');
        break;

    default:
        console.log('No signal found');
        break;
}

