var matrix = [
  [1, 2, 3],
  [4, 5],
  [1, 3, 9, 10],
  [4]
];

/*
I want the sub arrays of matrix that has more than 2 element in it

Result: [[1,2,3], [1,3,9,10]]
*/

var array = matrix.filter(function(element) {
  return element.length > 2;
});

console.log(array);
