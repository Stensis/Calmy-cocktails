
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

    menuBtn.addEventListener('click', ()=>{
        menuData.innerHTML = `<center style="padding-bottom:30px"><h2><span>Could not Access Data</span></h2></center>`;
    },false);
});