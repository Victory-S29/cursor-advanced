export async function getRandomChinese(lenght){
    let i = 0;
    let str = '';
    while (i < lenght){
        const sign = Date.now().toString().slice(-5);
        str += String.fromCharCode(sign);
        await new Promise(resolve => setTimeout(resolve, 50));
        i++;
    }
    document.writeln(`<h1>${str}</h1>`);
}

// getRandomChinese(4);