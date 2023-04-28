const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

function getSubjects(student){
    const subj = [];
    for (let key in student.subjects){
        subj.push(key);
    }

    const res = subj.map((arr) => {
        let str = (arr[0].toUpperCase() + arr.substring(1)).replace("_", " ");
        return str;
    })
    return res;
}

function getAverageMark(student){

    const marks = [];
    for (let key in student.subjects){
        marks.push(student.subjects[key]);
    }
 
    const ressArr = [].concat(...marks);

    const sum = ressArr.reduce(
        (prevValue, item)=>{
            const res = prevValue + item;
            return res;
        }, 0
    )

    const avg =  sum / ressArr.length;
    return avg.toFixed(2);
}

function getStudentInfo(student, avgMark){
    const avg = avgMark;
    const studentInfo = {};
    studentInfo.course = student.course;
    studentInfo.name = student.name;
    studentInfo.averageMark = avg;
    return studentInfo;
}

function getStudentsNames(students){
    const namesArr = [];
    for (let i = 0; i < students.length; i++){
        namesArr.push(students[i].name);
    }
    namesArr.sort();
    return namesArr;
}

function getBestStudent(students){
    const marks = [];
    for (let i = 0; i < students.length; i++){
        marks.push(parseFloat(getAverageMark(students[i])));
    }
    const greatestMarkIndex = marks.indexOf(Math.max(...marks));

    return students[greatestMarkIndex].name;
}

function calculateWordLetters(word){
    const letters = {};
    for (let i = 0; i < word.length; i++){
       const letter = word[i];
        if (letters[letter]){
            letters[letter]++;
        }
        else{
            letters[letter] = 1;
        }
    }
    return letters;
}

let firstStudent = students[0];

console.log(getSubjects(firstStudent));
console.log(getAverageMark(firstStudent));
console.log(getStudentInfo(firstStudent, getAverageMark(firstStudent)));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("assdffggg"));
