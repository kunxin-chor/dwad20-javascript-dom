const apiKey = "1891b5a6";
const BASE_API_URL = "https://www.omdbapi.com/";

document.querySelector("#btnSearch").addEventListener("click", async function () {
    let searchTerms = document.querySelector("#search").value;
    let response = await axios.get(BASE_API_URL, {
        params: {
            "apikey": apiKey,
            "s": searchTerms,
            "type": "movie"
        }
    });
    let resultElement = document.querySelector("#results");
    // for (let movie of response.data.Search){
    //     resultElement.innerHTML += `<li>
    //         <h3>Title: ${movie.Title}</h3>
    //         <h3>Year: ${movie.Year}</h3>
    //         <img src="${movie.Poster}"/>
    //     </li>`
    // }   

    // for (let movie of response.data.Search) {
    //     let liElement = document.createElement("li");

    //     let h3Element = document.createElement("h3");
    //     h3Element.innerText = `Title: ${movie.Title}`;

    //     let yearHeadingElement = document.createElement("h3");
    //     yearHeadingElement.innerText = `Year: ${movie.Year}`;

    //     let imageElement = document.createElement('img');
    //     imageElement.src = movie.Poster;

    //     liElement.appendChild(h3Element);
    //     liElement.appendChild(yearHeadingElement);
    //     liElement.appendChild(imageElement);

    //     resultElement.appendChild(liElement);

    // }

    for (let movie of response.data.Search) {
        let liElement = document.createElement("li");
        liElement.innerHTML = `<h3>Title: ${movie.Title}</h3>
           <h3>Year: ${movie.Year}</h3>
          <img src="${movie.Poster}"/>`;
        resultElement.appendChild(liElement);
    }
})
