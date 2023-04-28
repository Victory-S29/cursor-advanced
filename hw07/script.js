export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
// const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
// const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
  
// function calculateTaxes(salary){
//     return this.tax * salary;
// }
 
export function getMiddleTaxes(){
    return this.tax * this.middleSalary
}
 
// function getTotalTaxes(){
//     return this.tax * this.middleSalary* this.vacancies
// }
 
// function getMySalary(){
//     const salaryProfit = {};
//     salaryProfit.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
//     salaryProfit.taxes = this.tax *  salaryProfit.salary;
//     salaryProfit.profit = salaryProfit.salary - salaryProfit.taxes;
//     console.log(salaryProfit);
// }

// console.log(calculateTaxes.call(ukraine, 2000))
// console.log(getMiddleTaxes.call(ukraine))
// console.log(getTotalTaxes.call(ukraine))
// setInterval(function() { getMySalary.call(ukraine); }, 10000);