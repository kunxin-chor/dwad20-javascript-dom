console.log("Hello from script.js");

// the `document` is available to all
// JavaScript files that is ran on the browser
// this document variable is global scope
// and has been provided by the browser
console.dir(document);


// an event listener allows JavaScript code to run
// when a certain event happens to a HTML element
let buttonElement = document.querySelector("#change");
//  the first parameter of `addEventListener` is the type of
//  function to react to
// the second parameter is the function to call
// when the event is detected on the element
buttonElement.addEventListener("click", function () {
    // make the background color black
    let bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = "black";
    bodyElement.style.color = "white";

})