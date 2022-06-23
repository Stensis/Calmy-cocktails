let menu = document.queryselector('menu-bars');
let navbar = document.queryselector('.navbar')

menu.onclick =() =>{
    menu.classList
}

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