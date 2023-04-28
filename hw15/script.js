import css from "../hw10/styles/main.css";

import {getMaxDigit} from '../hw03/script.js';
import {studentsPairs} from '../hw04/script.js';
import {getArray} from '../hw05/script.js';
import {students as students2, getSubjects } from '../hw06/script.js';
import {getMiddleTaxes, ukraine } from '../hw07/script.js';
import {Student} from '../hw08/script.js';
import {generateBlocks} from '../hw09/script.js';
import {getRandomChinese} from '../hw11/script.js';
import {infiniteGenerator} from '../hw13/script.js';

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
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
// console.log("hw11 - getRandomChinese");
// getRandomChinese(4);
console.log("hw13 - infiniteGenerator");
const idGenerator = infiniteGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

// npm init -y
// npm install http-server --save-dev
// npx http-server


//webpack.config.js
// module.exports = {
//     entry:'./hw15/script.js'
// }
// npm init
// npm i webpack
// npm i webpack-cli
// "scripts": {
//     "build_webpack":"webpack build",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
// npm run build_webpack


// npm install --save-dev @babel/core @babel/cli @babel/preset-env
// babel.config.json
// ./node_modules/.bin/babel src --out-dir lib
// npm install style-loader --save-dev
// npm install --save-dev css-loader