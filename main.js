// Console Output
console.log('This JavaScript Console Output');

// Variables and Data Types
let stringData = 'This is Masum Reza';
let numberData = 5;
let flotingData = 5.5;
let booleanData = true;
const arrayData = [1, 2, 3, 4, 5];

// If Else Condition
let a = 20;
let b = 30;
if (a > b) {
  console.log(a + ' is greater than ' + b);
} else if (a < b) {
  console.log(b + ' is greater than ' + a);
} else {
  console.log('Both are Equal');
}

// Switch Statement

function getResult(a) {
  let result;
  switch (true) {
    case a >= 80:
      result = 'A+';
      break;
    case a >= 70:
      result = 'A';
      break;
    case a >= 60:
      result = 'A-';
      break;
    case a >= 50:
      result = 'B';
      break;
    case a >= 40:
      result = 'C';
      break;
    case a >= 33:
      result = 'D';
      break;
    default:
      result = 'F';
  }
  console.log('Your Grade is ', result);
}
console.log('=========Generate Grade Using Function and Switch=========');
getResult(90);
console.log('==========================================================');
// For Loop
let sum = 0;
for (i = 0; i <= arrayData.length; i++) {
  sum += i;
}
console.log('Sum Using For Loop: ', sum);

// While Loop
let j = 0;
let sum2 = 0;
while (j <= arrayData.length) {
  sum2 += j;
  j++;
}
console.log('Sum Using While Loop: ', sum2);

// Do While Loop
let k = 0;
let sum3 = 0;
do {
  sum3 += k;
  k++;
} while (k <= arrayData.length);
console.log('Sum Using Do While Loop: ', sum3);

// Function
function calculator(a, b) {
  console.log('Sum Using Function: ', a + b);
}
calculator(10, 20);

// Object
const objData = {
  name: 'Masum Reza',
  age: 25,
  district: 'Narail',
  mobile: '01720446526',
};
console.log('=========Object OutPut=========');
console.log(objData.name);
console.log(objData.age);
console.log(objData.district);
console.log(objData.mobile);
console.log('==========================================================');
