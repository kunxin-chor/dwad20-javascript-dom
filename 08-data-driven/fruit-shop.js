
main();

async function main() {
    let response = await axios.get("fruits.json")
    console.log(response.data);

    let priceTable = response.data;

    // 'fruitKey'variable will be each key in the priceTable
    for(let fruitKey in priceTable) {
        let fruit = priceTable[fruitKey]
        let pricingList = document.querySelector("#pricing");
        pricingList.innerHTML += `<li>${fruit.name} ($${fruit.price})`; 
    }

    document.querySelector("#btnBuy")
        .addEventListener("click", function () {

            let fruitRadioButtons = document.querySelectorAll(".fruit");
            let selectedFruit = "";
            for (let rb of fruitRadioButtons) {
                if (rb.checked) {
                    selectedFruit = rb.value;
                    break;
                }
            }
            // console.log(selectedFruit);
            // console.log(priceTable[selectedFruit])
            let quantity = parseInt(document.querySelector("#quantity").value);

            let price = priceTable[selectedFruit].price * quantity;


            let resultElement = document.querySelector("#results");
            resultElement.innerText = price;
        })

}
