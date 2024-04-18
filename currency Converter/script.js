const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select")
const tocurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode ==="USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode ==="INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target)
    });
}


const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

window.addEventListener("load", () => {
    getExchangeRate();
})

btn.addEventListener("click", (e) => {
   e.preventDefault();
   getExchangeRate();
})
 
const exchangeIcon = document.querySelector(".dropdown .icon ");
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromcurr.value;
    fromcurr.value = tocurr.value;
    tocurr.value = tempCode;
    updateFlag(fromcurr);
    updateFlag(tocurr);
    getExchangeRate ()
})

function getExchangeRate () {
    let amount = document.querySelector(".amount input");
   let amtVal =amount.value;
   if(amtVal === "" || amtVal <0)
   {
    amtVal = 1;
    amount.value = "1";
   }
   const URL= `https://v6.exchangerate-api.com/v6/4326283e597b49878bc7a32f/latest/${fromcurr.value}`
   fetch(URL).then(response => response.json()).then(result =>{
    let exchange = result.conversion_rates[tocurr.value];
    let totalExchange = (amtVal * exchange).toFixed(3);
    msg.innerText = `${amtVal} ${fromcurr.value} = ${totalExchange} ${tocurr.value}`
}).catch(() => {
    msg.innerText = "Somthing went Wrong";
});
}
