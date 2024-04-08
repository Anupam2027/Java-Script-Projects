const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (e){
           console.log(e);
           console.log(e.target);
           const clor= e.target.id;
           switch (clor) {
            case 'grey':
                  body.style.backgroundColor = clor;
                break;
            case 'white':
                  body.style.backgroundColor = clor;
                break;
            case 'yellow':
                  body.style.backgroundColor = clor;
                break;
            case 'blue':
                  body.style.backgroundColor = clor;
                break;
           
            default:
                body.style.backgroundColor = "purple";
                break;
           }
    })
})