// EIPO
document.querySelector("#btnSubmit").addEventListener("click",
    function(){

        /* for every single error that can
        occur, we can create variable to
        remember if it did occur or not */

        // assume that the name is not valid
        let isNameValid = false; // more than 7 characters
        let isNameProvided = false; // if a name is given, then true
        let isHappinessValid = false;
        let isHearAbout = false;
        let isWhyRecommendValid = false;

        // extract the name
        let name = document.querySelector("#txtName").value;

        let radioButtonElements = document.querySelectorAll(".happiness");
        let selectedHappiness = "";
        for (let rb of radioButtonElements) {
            if (rb.checked) {
                selectedHappiness = rb.value;
            }
        }

        let hearAboutElements = document.querySelectorAll('.hear-about');
        let selectedHearAbout = []; // need an array because we can check  more than oen
        for (let hearAbout of hearAboutElements) {
            if (hearAbout.checked) {
                selectedHearAbout.push(hearAbout.value);
            }
        }

        // for single select checkbox, we can just .value
        let selectedCountry = document.querySelector("#country").value;

        // for the multiple select checkbox, we have to go
        // through all the options and find the one that are selected
        let whyRecommendElements = document.querySelector("#why-recommend");
        let selectedWhyRecommend = [];
        for (let recommend of whyRecommendElements) {
            if (recommend.selected) {
                selectedWhyRecommend.push(recommend.value);
            }
        } 

        console.log(name, selectedHappiness, selectedHearAbout, selectedCountry, selectedWhyRecommend)

        // PROCESSING
        // set the flags (aka the state variables which determine if a input is valid or not)

        // if (name && name.length > 7) {
        //     isNameValid = true;
        // }
        // if (name) {
        //     isNameProvide = true;
        // }
        if (name) {
            isNameProvided = true;
            if (name.length > 7) {
                isNameValid = true; // meets the criteria of more than 7 characters
            }
        }

        if (selectedHappiness) {
            isHappinessValid = true;
        }

        // to check if an array is not empty
        if (selectedHearAbout.length > 0) {
            isHearAbout = true;
        }

        if (selectedWhyRecommend.length >= 2) {
            isWhyRecommendValid = true;
        }


        // OUTPUT:
        // CHECK THE ERRORS AND DISPLAY THEM
        displayErrors(isNameProvided, isNameValid, isHappinessValid, isHearAbout, isWhyRecommendValid);


    })

    function displayErrors(isNameProvided, isNameValid, isHappinessValid, isHearAbout, isWhyRecommendValid) {
        // reset all the error div so that they display nothing
        let errorDivElements = document.querySelectorAll('.error');
        for (let e of errorDivElements) {
            e.innerHTML = "";
        }

        if (!isNameProvided) {
            document.querySelector("#txtName-error").innerHTML += "<li>You must provide a name</li>";
        } 
        if (!isNameValid) {
            document.querySelector("#txtName-error").innerHTML += "<li>Your name must be more than 7 characters</li>";
        }

        if (!isHappinessValid) {
            document.querySelector("#happiness-error").innerHTML = "Please select one of the choices";
        }

        if (!isHearAbout) {
            document.querySelector("#hear-about-error").innerHTML = "Please select one of the choices"
        }

        if (!isWhyRecommendValid) {
            document.querySelector("#why-recommend-error").innerHTML = "Please select at least 2 options"
        }
    }   
