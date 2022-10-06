// document.querySelector allows us to
// select an element the same way
// we select an element for styling in css
// since we are to select the button with the ID of `btnDarkMode`
// we make sure to use #
let button = document.querySelector("#btnDarkMode");
button.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    if(document.querySelector("body").style.backgroundColor == "black"){
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black"; 
    }
})

let submitButton = document.querySelector("#submitBtn");
submitButton.addEventListener('click', function(){
    let firstNameElement = document.querySelector("#first-name");
    let firstName = firstNameElement.value;

    let lastName = document.querySelector("#last-name").value;

    // if firstName is a falsely value
    // i.e the user cannot provide a valid name

    if (!firstName) {
        document.querySelector('#first-name-error').innerText = "Please enter a proper first name";
    } else {
        // just in case there was an error message
        document.querySelector("#first-name-error").innerText = "";
    }

    if (!lastName) {
        document.querySelector("#last-name-error").innerText = "Please enter a proper last name";
    } else {
        document.querySelector("#last-name-error").innerText = "";
    }

})