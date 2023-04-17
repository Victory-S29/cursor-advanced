
const film4 = "https://static.wikia.nocookie.net/listofdeaths/images/b/b5/A_New_Hope_poster.jpg/revision/latest/scale-to-width-down/300?cb=20211105092556";
const film5 = "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2022/04/21120853/k2J0GbxnuWJARxLHa2vAyO77qRX.jpg";
const film6 = "https://upload.wikimedia.org/wikipedia/uk/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/200px-ReturnOfTheJediPoster1983.jpg";
const film1 = "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg";
const film2 = "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg";
const film3 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d7e300c-7ac9-4543-92e8-59bdb6288a82/dfjc639-4a7b1896-5193-4940-8aa1-abc763d0e8b8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkN2UzMDBjLTdhYzktNDU0My05MmU4LTU5YmRiNjI4OGE4MlwvZGZqYzYzOS00YTdiMTg5Ni01MTkzLTQ5NDAtOGFhMS1hYmM3NjNkMGU4YjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.60qeCB-jO8AnToso1omAOX51p3NqztogXBNGESsgXgo";

const filmsImg = [film4, film5, film6, film1, film2, film3];
const link = "https://swapi.dev/api/films/";

async function getJSON(link){
    let info = await fetch(link);
    let resJson = await info.json();
    return resJson;
}

let mainJSON = getJSON(link);
getFilm(mainJSON);

async function getFilm(resJson){
    resJson.then((film) => {
        for (let i = 0; i < film.results.length; i++){
            filmRender(film.results[i].title, filmsImg[i], i + 1)
        }
    })
}

function filmRender(name, link, id){
    let filmStr = `
    <div class = "elem-div" id =${id}>
    <img class = "elem-img" src="${link}" alt="${name}">
    <h2 class = "elem-h2">${name}</p>
    </div>`
    document.getElementById("content").innerHTML += filmStr;
}

function characterRender(name, birth, gender){
    let characterStr = `
    <div class = "elem-div">
    <img class = "elem-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRc8rYp_-q-PZbZquMwiXlanurk8R4Ov30Tw&usqp=CAU" alt="p">
    <p class = "elem-p">${name}</p>
    <p class = "elem-p">${birth}</p>
    <p class = "elem-p">${gender}</p>
    </div>`
    document.getElementById("content").innerHTML += characterStr;
}


async function getCharacters(mainJSON, filmNumb){
    document.getElementById("content").innerHTML = "";
    mainJSON.then(film => {
        film.results[filmNumb].characters.forEach(element => {
            fetch(element).then(res => res.json()).then((character) => {
                characterRender(character.name, character.birth_year, character.gender);
            }).catch(() =>{
                let errStr = `<h2 class = "elem-h2">Couldn't load photo, try to reload the page</h2>`;
                document.getElementById("content").innerHTML += errStr;
            });
        })
        let mainBTN = `<button id = "characters-main">Main page</button>`;
        document.body.innerHTML += mainBTN;
    })
 
}
 
document.addEventListener('click', function(event) {
    let pressDiv = (event.target.id).toString();
    let pressDivElement = (event.target.parentElement.id).toString() ;
    for (let i = 0; i < 6; i++){    
        if (pressDiv === `${i + 1}` || pressDivElement === `${i + 1}`){
            getCharacters(mainJSON, i);
        }
    }
    if ((event.target.id).toString() === "characters-main"){
        document.getElementById("content").innerHTML = "";
        getFilm(mainJSON);
        document.getElementById("characters-main").remove();
    }
})