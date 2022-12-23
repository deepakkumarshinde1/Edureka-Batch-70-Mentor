var a = 10;
var b = 20;

function add(a1, b1) {
  var result = a1 + b1;
  // console.log(result);
}

add(a, b);

// promises

//you will have a todays session (promise)
/*    
     mentor is available 
      ==> true ==> resolve ==> then(){}
        you will have a session
   
      ==> false ==> rejected ==> catch(){}
        you will not have session
*/
let isTrainerAvailable = false;
// async is use to cover a function to promise function
async function todaysSession(isAvailable) {
  if (isAvailable == true) {
    return Promise.resolve("you will have a session");
  } else {
    return Promise.reject("you will not have session");
  }
}

// single promise
/*
  todaysSession(isTrainerAvailable)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.error(error);
  });
  */

// multi promises
// async await
async function funA() {
  return Promise.resolve("data of a");
}

async function funB() {
  return Promise.resolve("data of b");
}

async function funC() {
  return Promise.reject("data of c");
}

async function funD() {
  return Promise.resolve("data of d");
}

async function runAllPromise() {
  try {
    let a = await funA(); // return a resolve result
    let b = await funB();
    let c = await funC();
    let d = await funD();

    console.log(a, b, c, d);
  } catch (error) {
    console.error(error);
  }
}

// runAllPromise();

let restaurantArray = [
  {
    name: "name",
    address: "address",
    city: "city",
  },
  {
    name: "name",
    address: "address",
    city: "city",
  },
  {
    name: "name",
    address: "address",
    city: "city",
  },
  {
    name: "name",
    address: "address",
    city: "city",
  },
  {
    name: "name",
    address: "address",
    city: "city",
  },
  {
    name: "name",
    address: "address",
    city: "city",
  },
]; // Object Array / JSON Array / Array Of Object
/*
let restaurant = new restaurantManager();

restaurant.filterRestaurantByCity("mumbai");

let keys = Object.keys(object); //  list of object prop in array
let value = Object.values(object); //  list of object values in array
let keyValues = Object.entries(object); //  list of object prop,value in array
*/
// map, forEach

let orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};
// all props in array, forEach, reduce
let prop = Object.keys(orderData);
// console.log(prop.length);

let values = Object.values(orderData);
// console.log(values);

let keyValues = Object.entries(orderData);
// console.log(keyValues);

var text = "Welcome to edureka";
// same code is used to print the data
// print 4 time

// for
for (var start = 1; start <= 0; start++) {
  // loop code
  console.log("for loop", start);
}

// while
var start = 1;
while (start <= 0) {
  // loop code
  console.log("while loop ", start);
  start++;
}

// do while
var start = 1;
do {
  // loop code
  console.log("do while loop", start);
  start++;
} while (start <= 0);

// DOM ===> Document Object Model
// logical representation of html code
// rendering engine => chrome => BLINK => HTML & CSS
// DOM alog => create a DOM TREE
// JS Engine ==> Chrome => V8 => JS Code
// DOM is use for manipulation (changing data)

// D => Document , O=> Object (element) , M => Model (data operation)

// its name
// class name
// id name

var btn = document.getElementById("btn");

btn.style.backgroundColor = "red";
btn.innerHTML = "how are you ?";

var divId = document.getElementById("div-id");
var child = divId.children;
for (var index = 0; index < child.length; index++) {
  child[index].addEventListener("mouseover", function () {
    this.style.backgroundColor = "green";
  });

  child[index].addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
  });
}

var obj = {
  name: "deepak",
  age: 31,
};
var output = [
  ["name", "deepak"],
  ["age", 31],
];

funOne(); // 3s
funTwo(); // 2s

function div(numberOne, numberTwo) {
  return new Promise(function (resolve, reject) {
    if (numberTwo === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(numberOne / numberTwo);
    }
  });
}

async function div(numberOne, numberTwo) {
  return numberTwo === 0
    ? Promise.reject("Cannot divide by zero")
    : numberOne / numberTwo;
}
// When a method by a class name we call it as ........ method
// Static method
