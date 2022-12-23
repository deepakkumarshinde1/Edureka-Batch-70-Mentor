/** when a function dont have a return keyword => void function */

// until and unless html page is not loaded don't run js code

window.addEventListener("load", function () {
  var btn = document.getElementById("btn");
  // btn === null

  btn.addEventListener("click", function () {
    console.log("click");
  });
  function funA() {
    var text = function () {};
    // console.log("hello");
    return text;
  }

  var a = funA();
  // console.log(a);
});

// Protocol ==> HTTP / HTTPS
/**
 * GET ==> get data from server (default) , from http cache
 * POST ==> save/insert/add ,send in http body
 * PUT ==> updating a data ,send in http body
 * DELETE ==> remove a record ,from http cache
 *  */

//-- inline/callback => its a function which defined in other function call

function abc(callback) {
  console.log("this is a function abc");
  callback();
}

// function xyz123() {
//   console.log("this is a function xyz");
// }

abc(function () {
  console.log("this is a function xyz");
});
