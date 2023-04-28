export const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
// const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
// const marks = [4, 5, 5, 3, 4, 5];

export const studentsPairs = (stud) =>{
    const studentPairs = [];
    studentPairs.push([stud[0], stud[2]]);
    studentPairs.push([stud[1], stud[3]]);
    studentPairs.push([stud[4], stud[5]]);
    return studentPairs;
}

// const studentsThemes = (stud, theme) => {
//     const studentPairsStr = [];
//     const studentThemes = [];
//     for (let i = 0; i < stud.length; i++){
//         studentPairsStr.push((stud[i][0] + " i " + stud[i][1]).toString());
//     }
//     for (let i = 0; i < stud.length; i++){
//         studentThemes.push([studentPairsStr[i], theme[i]]);
//     }
//     return studentThemes;
// }

// const studentsMarks = (stud, mark) => {
//     const studentMark = [];
//     for (let i = 0; i < stud.length; i++){
//         studentMark.push([stud[i], mark[i]]);
//     }
//     return studentMark;
// }

// const studentsFinal = (studPairs) => {
//     const studPairsCopy = studPairs.slice(0);
//     for (let i = 0; i < studPairsCopy.length; i++){
//         studPairsCopy[i].push(Math.round(Math.random() * (5 - 1)+ 1));
//     }
//     return studPairsCopy;
// }

// const pairs = studentsPairs(students);
// const pairsThemes = studentsThemes(pairs, themes);
// const studentsMark = studentsMarks(students, marks);
// const finalArray = studentsFinal(studentsThemes(pairs, themes))

// document.writeln("<p>Пари студентів</p>");
// output(pairs);
// document.writeln("<p>Студенти з темами</p>");
// output(pairsThemes);
// document.writeln("<p>Студенти з оцінками</p>");
// output(studentsMark);
// document.writeln("<p>Пари з оцінками</p>");
// output(finalArray);

// function output (array){
//     document.write(`<br>`)
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array[i].length; j++){
//             document.write(`<p class = "text"> - ${array[i][j]} </p>`)
//         }
//         document.write(`<br>`)
//     }
// }