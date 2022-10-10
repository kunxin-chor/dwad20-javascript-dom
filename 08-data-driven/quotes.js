
document.querySelector("#btnGetQuote").addEventListener("click", async()=>{
   // await basically tells JavaScript to wait at the line INSIDE the function
   // UNTIL the asynchronous action finishes
    console.log("Fetching data with axios")
   let response = await axios.get("quote.txt");
    console.log(response.data);
    // JavaScript will only go to line 8 IF the axios.get has finished
    let quotes = response.data;
    
    document.querySelector("#quotes").innerHTML = quotes;
})

setInterval(function(){
    console.log("Hello")
}, 100); // every 1000ms, call the function in the first argument

// OLD METHOD USING PROMISES
// document.querySelector("#btnGetQuote").addEventListener("click", async function(){
//     //  we can only use await in a function that is marked as async
//     //  use the axios to get the information/data in 'quote.txt'

//     // using axios is ASYNCHRONOUS - meaning, because it takes a long time
//     // ()> 100ms) to get the data, JavaScript will just do it in the background
//     // and run other lines of code
//     // .then() is a promsie. The promise takes one function and that
//     // function will be called when the axios.get finished
//    let response =  axios.get("quote.txt").then(function(response){
//     console.log(response.data);
//    }); // <-- the file path is relative to js file
//    console.log("After axios.get");
//    for (let i =0; i < 1000; i++){
//     console.log(i);
//    }

// })