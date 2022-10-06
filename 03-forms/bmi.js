let buttonElement = document.querySelector("#btnCalculate");
buttonElement.addEventListener("click", function(){
    let weightTextbox = document.querySelector("#txtWeight");
    // the value of the textbox is ALWAYS a string
    let weight = parseFloat(weightTextbox.value);
    let heightTextbox = document.querySelector("#txtHeight");
    let height = parseFloat(heightTextbox.value);

    console.log(weight, height);
    
   let bmi = weight / height ** 2;
   
   let resultSpan = document.querySelector("#result");
   resultSpan.innerText = bmi;
})

// The following won't work because we retrieve the
// value of the text box before the user has typed in anything:
// TAKE NOTE: there's no way to automatically update a variable
// when the value of text box change just by using the
// assignment operator


// let weightTextbox = document.querySelector("#txtWeight");
// let weight = weightTextbox.value;

// let heightTextbox = document.querySelector("#txtHeight");
// let height = heightTextbox.value;

// let button =document.querySelector("#btnCalculate");
// button.addEventListener('click', function(){
        // didn't update the weight and height
        // variable with the value from the textbox
        // so they still remain empty strings
//     console.log("weight =", weight);
//     console.log("height =", height);
// })