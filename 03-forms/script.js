let submitButton = document.querySelector("#btnSubmit");
submitButton.addEventListener("click", function(){
    let nameTextBox = document.querySelector("#txtName");

    console.log("name =", nameTextBox.value);

    // if want to select the radio buttons by its name, use the syntax below
    // let radioButtons = document.querySelectorAll("[name='happiness']")
    let radioButtons = document.querySelectorAll('.happiness');

    // selectedValue is to act as a state variable to remember the value
    // of the selected radio button
    let selectedValue = null; // we have no idea what the selected value
    for (let rb of radioButtons) {
        if (rb.checked == true) {
            // if a radio button is found to be checked
            // use the `selectedValue` variable to remember its value
            selectedValue = rb.value;
            break;
        }
    }
    console.log("Selected radio button = ", selectedValue)
    let checkboxes = document.querySelectorAll('.hear-about');
    let hearAbout = []; // accumulator variable
    for (let box of checkboxes) {
        if (box.checked) {
            hearAbout.push(box.value);
        }
    }
    console.log("selected checkboxes =", hearAbout);

    let countrySelect = document.querySelector("#country");
    let selectedCountry = countrySelect.value;
    console.log("selected country =>", selectedCountry);

    let whyRecommendOptions = document.querySelectorAll("#why-recommend option");
    let selectedOptions = [];  // use array because > 1 option can be selected
    for(let option of whyRecommendOptions) {
        if (option.selected) {
            selectedOptions.push(option.value)
        }
    }
    console.log(selectedOptions);

})