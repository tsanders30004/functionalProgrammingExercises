var matrix = [
  [1, 2, 3],
  [4, 5],
  [1, 3, 9, 10],
  [4]
];

/*
Sum the lengths of the subarrays
Use reduce
*/
var result = matrix.reduce(function(currentValue, element) {
  return currentValue + element.length;
}, 0);
/*
Sum the numbers in the subarrays
Result: [6, 9, 23, 4]
*/

var sums = matrix.map(function(element) {
  var sum = element.reduce(function(currentValue, element) {
    return currentValue + element;
  }, 0);
  return sum;
});

/*
sum of all the numbers
*/
var finalSum = sums.reduce(function(sum, n) {
    return sum + n;
  }, 0);

/*
Refactoring / simplification
A sumArray funcion that sums an array of numbers
Take in an array "arr", and return the sum as a number
*/
function sumArray(arr) {
  return arr.reduce(function(sum, n) {
    return sum + n;
  }, 0);
}

var sums = matrix.map(function(element) {
  var sum = sumArray(element);
  return sum;
});

/*
sum of all the numbers
*/
var finalSum = sumArray(sums);


// more simplification
var sums = sumArray(sumArray(matrix));
