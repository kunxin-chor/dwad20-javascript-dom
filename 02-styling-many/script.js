// What are the EIPO
// When the user clicks on the button
// we want all the reasons to buy from us
// to be in background yellow.

// EVENT: click on button
// INPUT: n/a
// PROCESSING: find all the li.reason
// OUTPUT: change them background yellow
let button = document.querySelector("#change");
button.addEventListener("click", function() {
    let reasons = document.querySelectorAll(".reason");
    console.log(reasons);

    // Since querySelectorAll() will return an array
    // of HTML elements. To process each of them 
    // we must use a for loop to iterate through them one by
    // one and change their background color:
    // for(let i =0; i < reasons.length; i++) {
    //     let eachReason = reasons[i];
    //     eachReason.style.backgroundColor = "yellow";
    // }

    // for (let eachReason of reasons) {
    //     eachReason.style.backgroundColor = "yellow";
    // }

    // or use the `forEach` to apply a function to each
    // of the element. So the first argument of the function
    // is the current element to be processed
    reasons.forEach(function(eachReason){
        eachReason.style.backgroundColor = "yellow"
    })
})