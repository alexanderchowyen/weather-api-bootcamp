 console.log('does it work')
 const button = document.querySelector("#button")
 const city = document.querySelector("#city")
 const country = document.querySelector("#country")
;

 button.addEventListener('click', function(){ 
     const url =  `http://api.weatherapi.com/v1/current.json?key=a95ab548de894c73b07220619213009&q=${city.value}&country=${country.value}`
   fetch(url)
   .then(res => res.json())
   .then(data => {
    console.log(data);
    document.querySelector('h1').innerText = `The Temperature in ${data.location.name}, ${data.location.region} is ${data.current.temp_f} °F`
   })

 })


//make consts, 2 inputs with id's, button with id, make a function and event listener for listed items reference nasa. input.values 

//9639ffab5c9373344ddc0c38c71f356a
//f684cca129e1bab3b914d4312f1ccf83
//79db5aafd685d758f4577bd3f03c419c
//8fd158d62ec949cd95c3fee9c946585a
//davidsapi a95ab548de894c73b07220619213009
//used multiple api keys and used a different account to see if that would solve the bug. not sure of why it wouldn't go through. used each in my work and davids to see if it was my code or my key
