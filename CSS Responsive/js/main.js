//

// API => Application Programming Interface
// handel a specific operations
// DOM, Promise , Async , Async/Await , Storage API, XHR , Fetch => Only on browser in javascript

// Client ==> Request ==> Server
// Client <== Response <== Server
// HTTP => REST (Representational State Transfer) API

// to handel // create and consume => REST API => XHR or Fetch API
// XHR & FETCH are async(non-block) in nature

// in build js function

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getData);
} else {
  x.innerHTML = "Geolocation is not supported by this browser.";
}

function getCurrentPosition(callback) {
  let coords = {
    accuracy: 2019.2207213381607,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 19.9681117,
    longitude: 73.8066048,
    speed: null,
  };
  callback(coords);
}

getCurrentPosition(getData);

function getData(position) {
  console.log(position);
}
// function call and in that function call we have defined a function
