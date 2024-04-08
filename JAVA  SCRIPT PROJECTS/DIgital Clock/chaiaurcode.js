const clock = document.getElementById('clock')
// let date = new Date();
// console.log(date.toLocaleTimeString());

//here ,we have to print local time in every sec so we use a function which is
//setInterval()--> thisfunction take two parameter first function and second time or interval
setInterval(function (){  //very important
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
},1000)