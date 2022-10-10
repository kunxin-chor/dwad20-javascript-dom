// let buttonElement = document.querySelector("#btnSubmit");
// buttonElement.addEventListener("click", function(){
//    
//})

// localization data
let errorMessages = {
    "en":{
        "name_not_entered": "Please enter your name",
        "email_not_entered": "Please enter your email",
        "email_format_invalid": "Your email is invalid",
        "declaration_not_checked":"Please declare that you are not lying"
    },
    "jp":{
        "name_not_entered":"お名前を入力してください",
        "email_not_entered":"あなたのメールアドレスを入力してください",
        "email_format_invalid":"メールアドレスが無効です",
        "declaration_not_checked":"嘘をついていないことを宣言してください"
    }
}


// 1. EVENT
document.querySelector("#btnSubmit").addEventListener("click", function(){
    // 2. INPUT: Extract out all the values
    let nameElement = document.querySelector("#name");
    let name = nameElement.value;

    let email = document.querySelector("#email").value;

    // get all the radio buttons
    let allRadioButtons = document.querySelectorAll('.flu');

    // define a state variable to remember which radio button is pressed
    let selected = "";

    // use a for loop to go throughe each of the radio button
    for (let eachRadioButton of allRadioButtons) {
        // if the current radio button is checked, then set
        if (eachRadioButton.checked) {
            // set the state variable to the value of the radio button
            selected = eachRadioButton.value;
            break;
        }
    }

    // extract all the checkboxes that have been checked
    let allCheckboxes = document.querySelectorAll('.conditions');
    let selectedCheckboxes = []; // because we can select multiple, therefore we need to use an array

    for (let checkbox of allCheckboxes) {
        if (checkbox.checked) {
            selectedCheckboxes.push(checkbox.value);
        }
    }


    let declareCheckboxElement = document.querySelector("#declaration");
    let declared = declareCheckboxElement.checked;


    // VALIDATION FLAG
    // Flag = A boolean variable to remember if certain things have happened or not
    let emailValid = false;
    let emailEntered = false;
    let nameEntered = false;
    let isDeclared = false;

    if (email) {
        emailEntered = true;
    }

    if (email.includes("@") && email.includes(".")) {
        emailValid = true;
    }

    if (name) {
        nameEntered = true;
    }

    if (declared) {
        isDeclared = true;
    }

    // DISPLAY ERROR via changing the INNERHTML
    // When we change the .innerHTML of a DOM object
    // all its element nested inside it are destroyed
    // and recreated according to the modified innerHTML
    let summaryElement = document.querySelector("#summary");
    summaryElement.innerHTML = ""; // clear all existing elements inside #summary first

    // IMPORTANT: If we just a single `=`, then the ENTIRE
    // innerHTML is replaced and we'll see one error message
    // If we use `+=`, then we are appending and we'll see
    // each of the error messages 
    if (emailEntered == false) {
        summaryElement.innerHTML += `<p>Please provide your email</p>`;
    }
    if (emailEntered == true && emailValid == false) {
        summaryElement.innerHTML += `<p>The email is not valid.</p>`;
    }
    if (nameEntered == false) {
        summaryElement.innerHTML += `<p>Please provide your name</p>`;
    }
    if (isDeclared == false) {
        summaryElement.innerHTML += `<p>Please declare that you are telling the truth</p>`
    }

})