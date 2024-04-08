const form = document.querySelector('form')
//this usecase will give we empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const text = document.querySelector('#text');
    const status = document.querySelector('#status');
    if (height === '' || height < 0 || isNaN(height)) {
        text.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        text.innerHTML = `Please give a valid weight ${weight}`
    } else
    {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show result
    text.innerHTML = `${bmi}`;
    
    if(bmi < 18.6) {
        status.innerHTML = `Your weight is "Under Weight" ${bmi}`
    } else if(bmi >24.9){
        status.innerHTML = `Your weight is "Over Weight" ${bmi}` 
    }else{
        status.innerHTML = `Your weight is "Normal" ${bmi}`
    }
    
}
})