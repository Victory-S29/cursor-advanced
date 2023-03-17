function getArray(length, min, max){
    const newArray = [];
    for (let i = 0; i < length; i++){
        newArray.push(Math.round(Math.random() * (max - min)) + min);
    }
    return newArray;
}
 
function getModaForCycle(numbers){
    const mainArr = [];
    for(let i = 0; i < numbers.length ; i++){
        if (Number.isInteger(numbers[i])){ 
            mainArr.push(numbers[i]);
        }
    }
    let moda = mainArr[0];
    let modacounter = 1;

    for (let i = 0; i < mainArr.length ;i++){ 
       let counter = 1;
       for(let j = i + 1; j < mainArr.length ;j++){
            if (mainArr[j] === mainArr[i]){ 
                counter++;
            }
        }
        if (modacounter < counter){
            modacounter = counter;
            moda = mainArr[i];
        }
    }
    return moda
}

function getAverage(numbers){
    const mainArr = [];
    for(let i = 0; i < numbers.length ; i++){
        if (Number.isInteger(numbers[i])){ 
            mainArr.push(numbers[i]);
        }
    }

    const sum = mainArr.reduce(
        (prevValue, item)=>{
            const res = prevValue + item;
            return res;
        }, 0
    )
    return sum / mainArr.length;
}
 
function getMediane(numbers){
    const mainArr = [];
    for(let i = 0; i < numbers.length ; i++){
        if (Number.isInteger(numbers[i])){ 
            mainArr.push(numbers[i]);
        }
    }
    mainArr.sort((a, b)=> a - b)
    document.writeln(`<p>Відсортований масив: ${mainArr}</p>`);
    if (mainArr.length % 2 === 0){
        return (mainArr[mainArr.length / 2] + mainArr[mainArr.length / 2 - 1]) / 2
    } else {
        return mainArr[(mainArr.length - 1) / 2]
    }
}
 
function filterEvenNumbers(numbers){
    const res = numbers.filter((arr) => {
        return arr % 2 != 0;
    });
    return res
}

function countPositiveNumbers(numbers){
    const resArr = numbers.filter((number) => {return number > 0})
    return resArr.length
}

function getDividedByFive(numbers){
    const res = numbers.filter((arr) => {
        return arr % 5 === 0;
    });
    return res
}
 
function replaceBadWords(str){
    const words = str.split(' ');
    const mWords = ["fuck", "shit"];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < mWords.length; j++) {
            words[i] = words[i].replace(mWords[j], "*".repeat(mWords[j].length));
        }
    }
    str = words.join(' ');
    return str;
}

function divideByThree(word) {
    word = word.toLowerCase().replace(/ /g, '');
    const syllables = [];
    for (let i = 0; i < word.length; i += 3) {
        const syllable = word.substr(i, 3);
        syllables.push(syllable);
    }
    return syllables;
}

const arr = getArray(10, -5, 10);
document.writeln(`<p>Створити випадковий масив на 10 елементів: ${arr}</p>`);
document.writeln(`<p>Знайти моду масива: ${getModaForCycle(arr)}</p>`);
document.writeln(`<p>Знайти середнє масива: ${getAverage(arr)}</p>`);
document.writeln(`<p>Знайти медіану масива: ${getMediane(arr)}</p>`);
document.writeln(`<p>Знайти непарні числа масива: ${filterEvenNumbers(arr)}</p>`);
document.writeln(`<p>Знайти кількість елементів більше 0 в масиві: ${getModaForCycle(arr)}</p>`);
document.writeln(`<p>Знайти елементи масива кратні 5: ${getDividedByFive(arr)}</p>`);

const text = "No fucking way this shit works"
document.writeln(`<p>Прибрати погані слова: ${replaceBadWords(text)}</p>`);
document.writeln(`<p>Поділити рядок по 3 символа: ${divideByThree(text)}</p>`);
