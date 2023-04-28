import {getMaxDigit} from '../hw03/script';
import {students, studentsPairs} from '../hw04/script';
import {getArray} from '../hw05/script';
import {students as students2, getSubjects } from '../hw06/script';
import {getMiddleTaxes, ukraine } from '../hw07/script';
import {Student} from '../hw08/script';
import {generateBlocks} from '../hw09/script';
import {getRandomChinese} from '../hw11/script';
import {infiniteGenerator} from '../hw13/script';

console.log("hw03", getMaxDigit(1234));
console.log("hw04", studentsPairs(students));
console.log("hw05", getArray(10, 0, 10));
console.log("hw06", getSubjects(students2));
console.log("hw07", getMiddleTaxes.call(ukraine));
console.log("hw08 - Student");

let student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");
student.getInfo();

console.log("hw09 - generateBlocks");
generateBlocks();
console.log("hw11 - getRandomChinese");
getRandomChinese(4);
 
console.log("hw13 - infiniteGenerator");
const idGenerator = infiniteGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)




// npm init -y
// npm install http-server --save-dev
// npx http-server