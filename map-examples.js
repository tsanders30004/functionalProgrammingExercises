var matrix = [
  [1, 2, 3],
  [4, 5]
];
var matrix2 = [
  5, 1,
  3, 4
];
// result: [3, 2]
var spitBack = [];
for (var i = 0; i < matrix.length; i++) {
  spitBack.push(matrix[i].length);
}
var lengths = matrix.map(function(element) {
  // element is an array, which has a length
  return element.length;
});
matrix2.map(function(element) {
  // element is not a number
});

// return an array containing the first element of each inner array
// given a 2D array
// result [1, 4]
var firsts = matrix.map(function(element) {
  return element[0];
});
