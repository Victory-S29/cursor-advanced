const film4 = "https://cdn.shopify.com/s/files/1/0043/8144/2141/products/IS_2a24ef2e-f8ca-4a2f-92bb-b0bf773e1f88.jpg?v=1645837528";
const film5 = "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2022/04/21120853/k2J0GbxnuWJARxLHa2vAyO77qRX.jpg";
const film6 = "https://upload.wikimedia.org/wikipedia/uk/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/200px-ReturnOfTheJediPoster1983.jpg";
const film1 = "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg";
const film2 = "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg";
const film3 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d7e300c-7ac9-4543-92e8-59bdb6288a82/dfjc639-4a7b1896-5193-4940-8aa1-abc763d0e8b8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkN2UzMDBjLTdhYzktNDU0My05MmU4LTU5YmRiNjI4OGE4MlwvZGZqYzYzOS00YTdiMTg5Ni01MTkzLTQ5NDAtOGFhMS1hYmM3NjNkMGU4YjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.60qeCB-jO8AnToso1omAOX51p3NqztogXBNGESsgXgo";
const filmsImg = [film4, film5, film6, film1, film2, film3];

const link = "https://swapi.dev/api/films/";
const planetLink = "https://swapi.dev/api/planets/";
 
let mainJSON = getJSON(link);
let planetJSON = getJSON(planetLink);

async function getJSON(link){
    let info = await fetch(link);
    let resJson = await info.json();
    return resJson;
}

const filmInput = document.getElementById("film-input");
const inputSubmit = document.getElementById("film-show");
let numberOfFilm;

getFilm(mainJSON);

charactersPhoto = {
    "1" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWOey035wnlxX7w0AzG8s0rQ70cwaT0k1JA&usqp=CAU"
    ///........................
}

function getFilm(resJson){
    document.getElementById("film-title").innerText = "Click film to see characters"
    resJson.then((film) => {
        for (let i = 0; i < film.results.length; i++){
            filmRender(film.results[i].title, filmsImg[i], i + 1)
        }
    })
    let planetBTN = `<button class= "btn" id = "planet-main">Planets page</button>`;
    document.body.innerHTML += planetBTN;
}

function filmRender(name, link, id){
    let filmStr = `
    <div class = "elem-div" id =${id}>
    <img class = "elem-img" src="${link}" alt="${name}">
    <p class = "elem-h2">${name}</p>
    </div>`
    document.getElementById("content").innerHTML += filmStr;
}

function getCharacters(charactersPhoto, mainJSON, filmNumb){
    mainJSON.then(film => {
        film.results[filmNumb].characters.forEach(element => {
            fetch(element).then(res => res.json()).then((character) => {
                const str = character.url;
                const idByNumber = (str.match(/\d+/g).join());
                let link;
                if (charactersPhoto[idByNumber]) {link = charactersPhoto[idByNumber]}
                else {link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRc8rYp_-q-PZbZquMwiXlanurk8R4Ov30Tw&usqp=CAU"}
                characterRender(character.name, character.birth_year, character.gender, link);
            }).catch(() =>{
                let errStr = `<h2 class = "elem-h2">Couldn't load photo, try to reload the page</h2>`;
                document.getElementById("content").innerHTML += errStr;
            });
        })
        let mainBTN = `<button class= "btn" id = "characters-main">Main page</button>`;
        document.body.innerHTML += mainBTN;
    });
}

function characterRender(name, birth, gender, link){
    let characterStr = `
    <div class = "elem-div">
    <img class = "elem-img" src="${link}" alt="p">
    <p class = "elem-p">${name}</p>
    <p class = "elem-p">${birth}</p>
    <p class = "elem-p">${gender}</p>
    </div>`
    document.getElementById("content").innerHTML += characterStr;
}

function getPlanets(planetJSON){
    planetJSON.then((planet) => {
        for (let i = 0; i < planet.results.length; i++){
            planetRender(planet.results[i].name, planet.results[i].terrain, i);
        }
    })
    let mainBTN = `<button class= "btn" id = "characters-main">Main page</button>`;
    document.body.innerHTML += mainBTN;
}

function planetRender(name, terrain, id){
    let planetStr = `
    <div class = "planet-div" id =planet-${id}>
    <p class = "planet-p">${name}</p>
    <p class = "planet-p">${terrain}</p>
    </div>`
    document.getElementById("content").innerHTML += planetStr;
}

function showBtns(main, onefilm, character, planets){
    if (main){
        document.getElementById("characters-main").remove();
        document.getElementById("film-title").innerText = "";
        document.getElementById("content").innerHTML = "";
    }
    if (onefilm){
        document.getElementById("film-title").innerText = "";
        if(document.getElementById("planet-main")){document.getElementById("planet-main").remove();};
        document.getElementById("content").innerHTML = "";
        const elementsToRemove = document.querySelectorAll('#characters-main');
        if(elementsToRemove.length > 0){document.getElementById("characters-main").remove();};
    }
    if (character){
        document.getElementById("film-title").innerText = "";
        document.getElementById("content").innerHTML = "";
        if(document.getElementById("planet-main")){document.getElementById("planet-main").remove();};
    }
    if (planets){
        document.getElementById("film-title").innerText = "";
        document.getElementById("content").innerHTML = "";
        if(document.getElementById("planet-main")){document.getElementById("planet-main").remove();};
    }
}

document.addEventListener('click', function(event) {
    let pressDiv = (event.target.id).toString();
    for (let i = 0; i < 6; i++){    
        if (pressDiv === `${i + 1}` || 
            (event.target.parentElement.id).toString()  === `${i + 1}`){
            showBtns(false, false, true, false)
            getCharacters(charactersPhoto, mainJSON, i);
        }
    }

    if ((event.target.id).toString() === "characters-main"){
        showBtns(true, false, false, false)
        getFilm(mainJSON);
    }

    if ((event.target.id).toString() === "planet-main"){
        showBtns(false, false, false, true)
        getPlanets(planetJSON);
    }

    if ((event.target.id).toString() === "film-show"){
        event.preventDefault();
        let filmValue = numberOfFilm;
        if (filmValue && [1, 2, 3, 4, 5, 6].includes(Number(filmValue))) {
            showBtns(false, true, false, false);
            filmInfo(mainJSON, Number(filmValue) - 1);
        } else {
            alert("Incorrect value in form");
        }
        form.reset();
    }
})

document.addEventListener("input", e => {
    numberOfFilm = e.target.value;
})

function filmInfo(resJson, i){
    resJson.then((film) => {
            filmInfoRender(film.results[i].title, filmsImg[i], film.results[i].director, film.results[i].producer, film.results[i].opening_crawl)
    })
}

function filmInfoRender(title, filmsImg, director, producer, opening_crawl){
    let filmStr = `
    <div class = "main-div">
    <h2 class = "main-h2">${title}</h2>
    <img class = "main-img" src="${filmsImg}" alt="p">
        <div class = "main-text"> 
            <p class = "main-p"><span>Director:</span> ${director}</p>
            <p class = "main-p"><span>Producer:</span> ${producer}</p>
            <p class = "main-p"><span>Opening Crawl:</span> ${opening_crawl}</p>
        </div>
    </div>`
    document.getElementById("content").innerHTML = filmStr;
    let mainBTN = `<button class= "btn" id = "characters-main">Main page</button>`;
    document.body.innerHTML += mainBTN;
}
 