/*
slice() : 
The slice() method returns the selected elements in an array, as a new array object.
The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
Note: The original array will not be changed.
Syntax : array.slice(start, end);
*/

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
var myBest = fruits.slice(-3, -1);
console.log(citrus);
console.log(myBest);

/*
splice() :
The splice() method adds/removes items to/from an array, and returns the removed item(s).
Note: This method changes the original array.
Syntax : array.splice(index, howmany, item1, ....., itemX);
*/

var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits1);

var fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let deleted = fruits2.splice(2, 2);
console.log(fruits2);
console.log(deleted);

