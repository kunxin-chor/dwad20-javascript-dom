let students = [
    {
        "name":"Abel",
        "score": 67
    },
    {
        "name":"Ben",
        "score": 73
    },
    {
        "name":"Cindy",
        "score": 47
    },
    {
        "name": "Roger",
        "score": 95
    }
]
// USING LIST RENDERING TECHNIQUE


let listElement = document.querySelector("#list");
// DOMContentLoaded -- basically means the HTML file has finished loading
// and all DOM elements have been created (i.e the web page is ready)
window.addEventListener("DOMContentLoaded", function(){
    for (let eachStudent of students) {
        // create the new element to store the student info
        // the first argument of createElement is the
        // tag name of the element you want
        let newItemElement = document.createElement("p"); // <p>
        // fill in the content of the new student
        newItemElement.innerText = `${eachStudent.name} - ${eachStudent.score}`;
   
   
        listElement.appendChild(newItemElement);
    }
})