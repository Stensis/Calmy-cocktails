
// get menuBtn
let menuBtn = document.getElementById("menuBtn");
// get id for menuSlot div
let menuData = document.getElementById("menuData");
//  API KEY
const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/popular.php',
    headers: {
        'X-RapidAPI-Key': 'f65e2f85c4mshfd238deadc30f07p192954jsnd2b2e354f582',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};
// axios requesting data.
axios.request(options).then(function (response) {
    console.log(response.data);
    let data = response.data;
    // adding event listener
    menuBtn.addEventListener('click',function(){
        menuData.innerHTML = `<center><h1><span><u>Menu List</u></span></h1></center>`;
        data.drinks.map((drink)=>{
            menuData.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="${drink.strDrinkThumb}" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>${drink.strDrink}</b></h4>
                        <p>${drink.strCategory}</p>
                    </div>
                </div>
            </div>
            `;
        });
    },false);
//  handles the error.
}).catch(function (error) {
    console.log(error);
    menuBtn.addEventListener('click', ()=>{
        menuData.innerHTML = `<center style="padding-bottom:30px"><h2><span>Could not Access Data</span></h2></center>`;
    },false);
});