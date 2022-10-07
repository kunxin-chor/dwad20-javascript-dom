let buttonElement = document.querySelector("#btnAdd")
// EVENT PHASE

buttonElement.addEventListener("click", function(){
    // INPUT PHASE: extract out the number the user has typed in
    let newNumberElement = document.querySelector("#newNumber");
    let number = newNumberElement.value;

    // alternatively, extract the value directly
    // let number = document.querySelector("#newNumber").value;

    let numberListElement = document.querySelector("#numberList");
    numberListElement.innerHTML = numberListElement.innerHTML + `<li>${number}</li>`;


})