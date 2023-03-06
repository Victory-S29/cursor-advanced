let first_number = prompt('Введіть перше число: ');
let second_number = prompt('Введіть друге число: ');
let cond = confirm("Пропустити парні числа?");
let sum = 0;

if (isNaN(first_number) || isNaN(second_number)){
    console.log("Неправильний ввід");
} else {
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
}