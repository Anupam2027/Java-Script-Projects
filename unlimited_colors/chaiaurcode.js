let startBotton
function randomColor (){
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++)
    {
        cons=cons+val[Math.floor(Math.random()*16)];
    }
    return cons;
}
let start = function(){
    document.body.style.backgroundColor = randomColor() 
}
document.querySelector("#start").addEventListener("click",function(e){
    e.preventDefault()
    console.log("started");
    if (!startBotton) {
        startBotton = setInterval(start,1000) 
    }
        
})
document.querySelector("#stop").addEventListener("click",function(){
    console.log("stopped"); 
    clearInterval(startBotton)
    startBotton = null
})


