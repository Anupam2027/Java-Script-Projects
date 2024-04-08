const initValue = document.querySelector('.result')
const Decrement = document.querySelector('#one')
const Increment = document.querySelector('#three')
const Reset = document.querySelector('#Two')

let initialValue = 0
Decrement.addEventListener('click',function (e){
    e.preventDefault()
    initialValue--;
    initValue.innerHTML = `${initialValue}`
})
Increment.addEventListener('click',function (e){
    e.preventDefault()
    initialValue++;
    initValue.innerHTML = `${initialValue}`
})
Reset.addEventListener('click',function (e){
    e.preventDefault()
    initialValue = 0;
    initValue.innerHTML = `${initialValue}`
})