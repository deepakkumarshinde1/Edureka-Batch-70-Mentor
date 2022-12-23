var array = [123, "abc", true, null, [1, 2, 3], { a: 1 }, function () {}]; // new way\

// array is a collection of same or different types of data
console.log(array);
// call a array data ==> array[indexNumber];
// in array a index (auto gen) always start with with zero i.e 0
// if array is empty ==> index === -1 i.e []
console.log(array[1]);

/* 

push*
pop
reduce
find
findIndex
slice
splice
map*
filter*
sort

*/

function add(a, b, callback) {
  var result = a + b;
  callback(result);
} // function definition

add(1, 2, function (result) {
  console.log("addition is ", result);
  // callback or inline function
}); // function call

// callback is a function in which we write a function definition in other function call parameter
// also here add function is a higher order function

/**
 * Variables  */
var varName = 10; // 10 is value it is store in VarName
var VarName = "Deepakkumar";

console.log(varName);
console.log(VarName);
var name = "Deepak"; // string
var mobile = 9876543210; // number
var isPresent = true; // boolean
var parentNumber = null; // object
var subject; // undefined

//Conditional Statements

// if else , switch
var condition = 10;
if (condition) {
  // true block
}

if (condition) {
  // true block
} else {
  // false
}

if (condition) {
  // true block
} else if (condition) {
  // else if true code
} else {
  // false code}
}

// multiple operation and from them you need to chose only one
var studentDepartment = "Mechanical "; // Science, Art , Commerce , IT
switch (studentDepartment) {
  case "Science":
    console.log("welcome to Science Department");
    break;

  case "Art":
    console.log("welcome to Art Department");
    break;

  case "Commerce":
    console.log("welcome to Commerce Department");
    break;

  case "IT":
    console.log("welcome to Commerce Department");
    break;

  default:
    console.log("Invalid department");
    break;
}
/**
 * Conditional Statements
 * Array
 *  Slice,Splice,Pop,Push,Merge,[...]
 * JS Object {}
 * Function
 *    function add(){... code ...}
 *
 *    var add = ()=>{ ... code ...}
 *
 *    this ==> keyword
 * DOM => Document Object Model
 *
 *
 */

let arrayOne = [11, 22, 33, 44, 55];
let arrayTwo = [66, 77, 88, 99, 111];
console.log(arrayOne);
// add data
// arrayOne.push(777);

// delete data
// arrayOne.pop();
// arrayOne.splice(3, 1);
// let newArray = arrayOne.slice(1, 4);
let arrayThree = [...arrayOne, ...arrayTwo]; // create a new array & merge array
console.log(arrayThree);

// browser has a global object
console.log(window);

console.log(this);

// bind()
// apply()
// call()
