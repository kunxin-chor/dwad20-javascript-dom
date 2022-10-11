// main();

// // all _named_ functions are hiosted (JS will automatically bring it to the top when the
// // browser loads the file)
// async function main(){
//     //  no difference in using axios to get a JSON file vs. accessing an API
//     let response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/");
//     console.log(response.data);
// }

// Figure the BASE API URL
// Use a `const` variable because we are unlikely to change it during the course of the
// program
const BASE_API_URL="https://pokeapi.co/api/v2/";

// EVENT
document.querySelector("#btnSearch").addEventListener("click", async function(){
    // INPUT PHASE
    let searchTerms = document.querySelector("#search").value;
    // eg: let say the user types in "pikachu"
    // then the url will "https://pokeapi.co/api/v2/pokemon/pikachu"
    let response = await axios.get(BASE_API_URL + "pokemon/" + searchTerms);
    document.querySelector("#name").innerText = response.data.name;
    document.querySelector("#weight").innerText = response.data.weight;
    document.querySelector("#image").src = response.data.sprites.front_shiny
})