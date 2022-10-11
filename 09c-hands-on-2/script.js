/*
# Instructions  

The URL https://anapioficeandfire.com/api/books/ will return a list of books as JSON objects. Write code such that when a button is pressed, axios will load from the url https://anapioficeandfire.com/api/books/ and present the name and number of pages for each book.

## Hints
1. Include axios
2. Use `axios.get` to retrieve the books inside `DOMContentLoaded`
3. Display the books in the `div#books` element (**IMPORTANT:** You have to modify the existing code so that it will work)
*/
const BASE_API_URL = "https://anapioficeandfire.com/api/";
document.querySelector("#btnLoad").addEventListener("click", async function(){
    let url = BASE_API_URL + "books";

    let response = await axios.get(url);
    let books = response.data;
    let resultElement = document.querySelector("#books");
    for (let b of books) {
        resultElement.innerHTML += `<div>${b.name} - Number of pages:${b.numberOfPages}</div>`
    }
})