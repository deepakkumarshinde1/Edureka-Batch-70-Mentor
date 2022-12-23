var a = 10; // global
var b = 10; // global

function add() {
  var result = a + b;

  for (let index = 0; index < 10; index++) {
    console.log("loop");
  }

  console.log(index); //  10, null, undefined, error;
}

add();
