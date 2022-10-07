let buttonElement = document.querySelector('#btnAddRandom');
buttonElement.addEventListener("click", function(){
    // INPUT PHASE: No input phase there is no user input
    // PROCESSING
    let randomNumber = Math.floor(Math.random() * 100 + 1)
    // createElement allows us to create a HTML element
    // the first argument of document.createElement is the 
    // the TAG NAME of the element
    let newNumberElement = document.createElement("li");
    newNumberElement.innerText = randomNumber;

    // select the ul element
    let numberListElement = document.querySelector("#numbers");
    // add the newly creatd <li> element as child of the numberListElemet
    numberListElement.appendChild(newNumberElement);

})