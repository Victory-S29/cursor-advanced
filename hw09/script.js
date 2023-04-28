export function generateBlocks(){ 
    for(let i = 0; i < 5; i ++){
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "center";
        document.body.appendChild(row);
        for(let j = 0; j < 5; j ++){
            let block = document.createElement("div");
            block.setAttribute("id", `block${i}${j}`);
            const rand = Math.round(Math.random() * (255 - 0));
            const rand1 = Math.round(Math.random() * (255 - 0));
            const rand2 = Math.round(Math.random() * (255 - 0));
            block.style.width = "50px";
            block.style.height = "50px";
            block.style.backgroundColor = "red";
            block.style.display = "block";
            block.style.backgroundColor = `rgb(${rand}, ${rand1}, ${rand2})`;
            row.append(block);
        }
    }
}

// function generateBlocksInterval(){
//     for(let i = 0; i < 5; i++){
//         for(let j = 0; j < 5; j++){
//            let currentBlock = document.getElementById(`block${j}${i}`)
//            const color = Math.round(Math.random() * (255 - 0));
//            const color1 = Math.round(Math.random() * (255 - 0));
//            const color2 = Math.round(Math.random() * (255 - 0));
//            currentBlock.style.backgroundColor = `rgb(${color}, ${color1}, ${color2})`;
//         }
//     }
// }

// generateBlocks();
// setInterval(generateBlocksInterval, 1000);