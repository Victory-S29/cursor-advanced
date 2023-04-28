//1. виводить найбільшу цифру в числі.
export function getMaxDigit(number){
    let maxDigit = 0;
    while (number){ 
        let newDecimal = number % 10;
        if (newDecimal > maxDigit) { maxDigit = newDecimal;}
        number = parseInt(number / 10);
    }
    return maxDigit;
}
 
// //2. ступінь числа
// function powCounter(number, pow){
//     let res = 1;
//     for (let i = 1; i <= pow; i++){
//         res *= number;
//     }
//     return res;
// }

// //3. форматує ім'я, роблячи першу букву великою.
// function nameRefactoring(strName){
//     const firstLetter = strName.charAt(0);
//     const firstLetterCap = firstLetter.toUpperCase();
//     const remainingLetters = strName.slice(1).toLowerCase();
//     const capitalizedWord = firstLetterCap + remainingLetters;
//     return capitalizedWord;
// }

// //4. вираховує суму, що залишається після оплати податку  
// const salaryCounter = (salary, tax = 19.5) => {
//     const taxSum = salary / 100 * tax;
//     const earnings = salary - taxSum;
//     return earnings
// }

// //5. повертає випадкове ціле число в діапазоні від N до M.
// const getRandomNumber = (startN, endN) => Math.floor(Math.random() * (endN - startN + 1)) + startN;

// //6. рахує скільки разів буква повторюється в слові.
// function letterCounter(letter, strName){
//     let counter = 0; 
//     for (let i = 0; i < strName.length; i++){
//         if (letter.toUpperCase() === strName.charAt(i).toUpperCase()){ 
//             counter++;
//         }
//     }
//     return counter;
// }

// //7. Створіть функцію, яка конвертує долари в гривні та 
// //навпаки в залежності від наявності символа $ або UAH в рядку.
// //8. інші валюти не конвертуються, потрібно виводити помилку, регістр не має значення.
// function convertCurrency(str){
//     str = str.toLowerCase();
//     const exchangeRate = 40;
//     let sumN = 0;
//     if (str.includes("$")){
//         sumN = Number(str.replace('$',''));
//         return (sumN * exchangeRate) + "грн.";
//     } else if (str.includes("uah")){
//         sumN = Number(str.replace('uah',''));
//         return (sumN / exchangeRate) + "$";
//     } else {
//         return "Incorrect data";
//     }
// }
 
// //9. генерація випадкового паролю 
// function getRandomPassword(pasLen = 8){
//     let password = '';
//     for (let i = 1; i <= pasLen; i++){
//         password += Math.floor(Math.random() * 10)
//     }
//     return password;
// }

// //10. видаляє всі задані букви з речення
// function deleteLetters(letter, strName){
//     let newStr = ''; 
//     for (let i = 0; i < strName.length; i++){
//         if (strName.charAt(i).toUpperCase() != letter.toUpperCase()){
//             newStr += strName[i];
//         }
//     }
//     return newStr;
// }

// //11. перевіряє, чи є слово паліндромом
// function isPalyndrom(str){
//     let palyndrom = true; 
//     str = str.toLowerCase();
//     let strForPalindromme = '';
//     //видалення пробілів
//     for (let i = 0; i < str.length; i++){
//         if (str.charAt(i).toUpperCase() != ' '){
//             strForPalindromme += str[i];
//         }
//     }
//     for (let i = 0; i < strForPalindromme.length; i++){
//         if (strForPalindromme.charAt(i) != strForPalindromme.charAt(strForPalindromme.length - 1 - i)){
//             palyndrom = false;
//         }
//     }
//     return palyndrom;
// }

// //12. видалить з речення букви, які повторюються.
// function deleteDuplicateLetter(str){
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let charCount = 0;
//         for (let j = 0; j < str.length; j++) {
//             if (str[j].toUpperCase() === char.toUpperCase()) {
//                 charCount++;
//             }
//         }
//         if (charCount === 1) {
//             newStr += char;
//         }
//     }
//     return newStr;
// }

// //=========================================================
// document.writeln(`<p>Функція No1: ${getMaxDigit(1230947586)}</p>` +
// `<p>Функція No2: ${powCounter(3, 4)}</p>` +
// `<p>Функція No3: ${nameRefactoring("vIKToriA")}</p>` +
// `<p>Функція No4: ${salaryCounter(1000, 19.5)}</p>` +
// `<p>Функція No5: ${getRandomNumber(1, 600)}</p>` +
// `<p>Функція No6: ${letterCounter("а", "Асталавіста")}</p>` +
// `<p>Функції No7-8: ${convertCurrency("100$")}</p>` +
// `<p>Функції No7-8, 2 приклад: ${convertCurrency("100uah")}</p>` +
// `<p>Функція No9: ${getRandomPassword(5)}</p>` +
// `<p>Функція No9, 2 приклад: ${getRandomPassword()}</p>` +
// `<p>Функція No10: ${deleteLetters('a', "blablabla")}</p>` +
// `<p>Функція No11: ${isPalyndrom("Я несу гусеня")}</p>` +
// `<p>Функція No12: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}</p>`
// )