const apiKey = "1891b5a6";
const BASE_API_URL="https://www.omdbapi.com/";

main();

async function main(){
    // we are manually building the query string
    // let url =`${BASE_API_URL}?apikey=${apiKey}&t=the lord of the rings`;
    // let response = await axios.get(url);
    // console.log(response.data);

    // use axios to build the query string
    let response = await axios.get(BASE_API_URL,{
        "params":{
            "apikey": apiKey,
            "t": "The Lord of the Rings"
        }
    })
    console.log(response.data)
}