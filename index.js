
// const input=document.getElementById("#search")
// .addEventListener("click",button)
// function button(){
//     alert('online')
// }






// const button=document.getElementsByClassName("primary-btn").addEventlistener("onclick",button)
// function button(){
//     alert(welcome)
// }



// const icon = document.getElementsByClassName('search-box');
// const input = document.queryselector('.text')

// menu.onclick =() =>{
//     menu.classList
// }
//  API KEY

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://cocktails1.p.rapidapi.com/popular.php',
  headers: {
    'X-RapidAPI-Key': 'f65e2f85c4mshfd238deadc30f07p192954jsnd2b2e354f582',
    'X-RapidAPI-Host': 'cocktails1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});