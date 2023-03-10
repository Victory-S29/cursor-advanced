let sum = 0;
let first_number = prompt('Введіть перше число: ');
let second_number = prompt('Введіть друге число: ');
let cond = confirm("Пропустити парні числа?");

while (isNaN(first_number) || isNaN(second_number) || parseInt(second_number) < parseInt(first_number) || parseInt(first_number) <= 0){
    console.log("Неправильний ввід");
    first_number = prompt('Введіть перше число: ');
    second_number = prompt('Введіть друге число: ');
    cond = confirm("Пропустити парні числа?");
}  
 
first_number = parseInt(first_number);
second_number = parseInt(second_number);
if (first_number > second_number){
    let temp = first_number;
    first_number = second_number;
    second_number = temp;
}
for (let i = first_number; i <= second_number; i++){
    if (cond) { 
        if (i % 2 != 0){
            sum += i;
        }
    } else {
        sum += i;
    }
}
console.log(sum)