// const text = document.getElementById("text");
// const up = document.getElementById("up");
// const down = document.getElementById("down");

export function* infiniteGenerator(){
    let initialId = 0;
    for (let i = 0; i < Infinity; i++){
        initialId += 1;
        yield initialId;
    }
}
// const idGenerator = infiniteGenerator();
// console.log(idGenerator.next().value)
// console.log(idGenerator.next().value)
// console.log(idGenerator.next().value)
// console.log(idGenerator.next().value)

// function* newFontGenerator(size){
//     let textSize = size;
//     while (true){
//         text.style.fontSize = textSize + 'px';
//         text.innerText = "Text " + textSize + 'px';

//         const textSizing = yield;
//         if (textSizing === "up") {textSize +=2;}
//         else if (textSizing === "down") {textSize -=2;}
//     }
// }

// const fontGenerator = newFontGenerator(14);
 
// document.addEventListener("click",  event => {
//     if (event.target.id === "up") {fontGenerator.next("up").value;}
//     else if (event.target.id === "down") {fontGenerator.next("down").value;}
// })