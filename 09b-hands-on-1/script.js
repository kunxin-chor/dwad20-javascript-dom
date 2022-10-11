/*
The URL https://programming-quotes-api.herokuapp.com/quotes/random will return a random quote each time it is called.

Change index.html and script.js such that whenever you click on the button,
a new quote will be display. If the button is clicked multiple times, the new quote should replace 
the original quote.
*/


let btnLoad = document.querySelector("#btnLoad");
btnLoad.addEventListener("click", async function(){
   let response = await axios.get("https://programming-quotes-api.herokuapp.com/quotes/random");
   // the data fetched from the endpoint will be in response.data

   let quoteElement = document.querySelector("#quote");
   quoteElement.innerHTML = `<span style="font-family:Verdana">${response.data.en}</span>`;
})