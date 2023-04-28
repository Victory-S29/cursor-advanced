export class Student{
    #marks;
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.#marks = [5, 4, 4, 5];
        this.dismissed = false;
        this.averageMark = 0;
    }
    
    get getMarks(){
        if (this.dismissed){
            return null;
        } else { 
        return this.#marks;}
    }
    set setMarks(mark){
        if (this.dismissed){
            return null;
        } else { 
        this.#marks.push(mark);
        }
    }

    getInfo(){
        console.log(`Студент(ка) ${this.course}го курсу ${this.university}, ${this.fullName}`);
    }
 
    getAverageMark(){
        if (this.dismissed){
            return null;
        } else { 
        const sum = this.#marks.reduce(
            (prevValue, item)=>{
                const res = prevValue + item;
                return res;
            }, 0
        )
        const avg =  sum / this.#marks.length;
        this.averageMark = avg;
        return avg;
        }
    }

    dismiss(){
        this.dismissed = true;
    }
    recover(){
        this.dismissed = false;
    }
}

// class BudgetStudent extends Student {
//     constructor(university, course, fullName){
//         super(university, course, fullName);
//         this.scholarship = setInterval(this.getScholarship.bind(this), 30000);
//     }

//     getScholarship() {
//         if(this.dismissed === false){ 
//             if(this.averageMark >= 4) { 
//                 console.log("Ви отримали 1400 грн. стипендії");
//             } else {
//                 console.log("Ви не отримуєте стипендію");
//             }
//         } else {
//             console.log("Не є студентом");
//         }
//     }
// }
 
// console.log("Частина 1");
// let student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");
// student.getInfo();
// console.log(student.getMarks);
 
// student.setMarks = 5;
// console.log(student.getMarks);

// console.log("Середня оцінка: " + student.getAverageMark());

// student.dismiss()
// console.log("Якщо студента відраховано: " + student.getAverageMark());

// student.recover()
// console.log("Якщо студента поновлено: " + student.getMarks);


// //===============================================================
// console.log("Частина 2");
// let secondStudent = new BudgetStudent("Київського Національного Університету м.Київ", 1, "Олена Родоманська Бендер");
// secondStudent.getInfo();
// console.log(secondStudent.getAverageMark());
