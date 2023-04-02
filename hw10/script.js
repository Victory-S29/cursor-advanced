document.addEventListener("DOMContentLoaded", function(){
    const arrCode = ["KeyA", "KeyS", "KeyD","KeyF", "KeyG", "KeyH"];

    function playSound(code){
        for(let i = 0; i < arrCode.length; i++){ 
            let elem = document.querySelector(`#key-${i + 1}`);
            elem.classList.remove("chosen");
            if (code === arrCode[i]){
                var audio = new Audio();
                audio.preload = 'auto';
                audio.src = `${i+1}.mp3`;
                audio.play();
                elem.classList.add("chosen");
            }
        }
   }
 
    document.onkeydown = function (e){
        playSound(e.code);
    }

    document.addEventListener('click', function(event) {
        for (let i = 0; i < arrCode.length; i++){ 
            let pressDiv = (event.target.id).toString();
            let pressDivElement = (event.target.parentElement.id).toString() ;
            if (pressDiv === `key-${i + 1}` || pressDivElement === `key-${i + 1}`){
                playSound(arrCode[i]);
            }
        }
    })
})