
//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number){
    let maxDigit = 0;
    while (number){ 
        let newDecimal = number % 10;
        if (newDecimal > maxDigit) { maxDigit = newDecimal;}
        number = parseInt(number / 10);
    }
    return maxDigit;
}

console.log(getMaxDigit(1734));

//Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function nameRefactoring(strName){
    const firstLetter = strName.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = strName.slice(1).toLowerCase();
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
}

console.log(nameRefactoring("daViD"));

// Створити функцію, яка рахує скільки разів певна буква
// повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4
function letterCounter(letter, strName){
    let counter = 0; 
    for (let i = 0; i < strName.length; i++){
        if (letter.toUpperCase() === strName.charAt(i).toUpperCase()){ 
            counter++;
        }
    }
    return counter;
}
console.log(letterCounter("а", "Асталавіста"));

// Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetters(letter, strName){
    let newStr = ''; 
 
    for (let i = 0; i < strName.length; i++){
        if (strName.charAt(i).toUpperCase() != letter.toUpperCase()){
            newStr += strName[i];
        }
    }

    return newStr;
}
console.log(deleteLetters("а", "Асталавіста"));

// Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
// isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(str){
    let palyndrom = true; 
    str = str.toLowerCase();
    let strForPalindromme = '';

    for (let i = 0; i < str.length; i++){
        if (str.charAt(i).toUpperCase() != ' '){
            strForPalindromme += str[i];
        }
    }
 
    for (let i = 0; i < strForPalindromme.length; i++){
 
        if (strForPalindromme.charAt(i) != strForPalindromme.charAt(strForPalindromme.length - 1 - i)){
            palyndrom = false;
        }
    }

    return palyndrom;
}
console.log(isPalyndrom("маsдам"));

// Створіть функцію, яка видалить з речення букви, які
// зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
// "сктдеим"

function deleteDuplicateLetter(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let charCount = 0;
 
        for (let j = 0; j < str.length; j++) {
            if (str[j].toUpperCase() === char.toUpperCase()) {
                charCount++;
            }
        }
 
        if (charCount === 1) {
            newStr += char;
        }
    }
    return newStr;
}
console.log(deleteDuplicateLetter("qqweddfgfv"));